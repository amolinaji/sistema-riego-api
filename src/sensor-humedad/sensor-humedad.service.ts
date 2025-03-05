import { Inject, Injectable } from '@nestjs/common';
import { CreateSensorHumedadDto } from './dto/create-sensor-humedad.dto';
import { SensorHumedad } from './entities/sensor-humedad.entity';
import { ValveState } from './entities/valve-state.entity';
import { AlarmState } from './entities/alarm-state.entity';
import { Op } from 'sequelize';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';
import moment from "moment-timezone";
@Injectable()
export class SensorHumedadService {
  constructor(
    @Inject('SENSOR_HUMEDAD_REPOSITORY')
    private sensorHumedadRepository: typeof SensorHumedad,
    @Inject('VALVE_STATE_REPOSITORY')
    private valveStateRepository: typeof ValveState,
    @Inject('ALARM_STATE_REPOSITORY')
    private alarmStateRepository: typeof AlarmState,
    private readonly websocketGateway: WebsocketGateway,
  ) {}

  async create(createSensorHumedadDto: CreateSensorHumedadDto) {
    const value = await this.sensorHumedadRepository.create(
      createSensorHumedadDto as SensorHumedad,
    );

    this.websocketGateway.handleSendMessage();

    return value;
  }

  async setValveOff() {
    return await this.valveStateRepository.update(
      { state: false },
      { where: { id: 1 } },
    );
  }

  async setValveOn() {
    return await this.valveStateRepository.update(
      { state: true },
      { where: { id: 1 } },
    );
  }

  async setAlarmOff() {
    return await this.alarmStateRepository.update(
      { state: false },
      { where: { id: 1 } },
    );
  }

  async setAlarmOn() {
    return await this.alarmStateRepository.update(
      { state: true },
      { where: { id: 1 } },
    );
  }

  async getAlarmState() {
    return await this.alarmStateRepository.findOne({ where: { id: 1 }, attributes: ['state'] });

  }

  async getValveState() {
    return await this.valveStateRepository.findOne({
      where: { id: 1 },
      attributes: ['state'],
    });
  }

  async findAllByDate(date: string) {
  console.log("DATE: ", date);

  // Convertir el inicio y fin del día a zona horaria de Colombia
  const startOfDay = moment.tz(`${date} 00:00:00`, "America/Bogota").toDate();
  const endOfDay = moment.tz(`${date} 23:59:59.999`, "America/Bogota").toDate();

  console.log("START:", startOfDay, "END:", endOfDay);

  return await this.sensorHumedadRepository.findAll({
    where: {
      createdAt: {
        [Op.between]: [startOfDay, endOfDay],
      },
    },
  });
}

}
