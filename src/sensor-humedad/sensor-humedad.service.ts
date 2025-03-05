import { Inject, Injectable } from '@nestjs/common';
import { CreateSensorHumedadDto } from './dto/create-sensor-humedad.dto';
import { SensorHumedad } from './entities/sensor-humedad.entity';
import { ValveState } from './entities/valve-state.entity';
import { AlarmState } from './entities/alarm-state.entity';
import { Op } from 'sequelize';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';
import * as moment from 'moment-timezone'; // Change import to use * as

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
    
    // Use moment.tz() with separate parameters
    const startOfDay = moment.tz(date, 'YYYY-MM-DD', 'America/Bogota').startOf('day').toDate();
    const endOfDay = moment.tz(date, 'YYYY-MM-DD', 'America/Bogota').endOf('day').toDate();
    
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
