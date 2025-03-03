import { Inject, Injectable } from '@nestjs/common';
import { CreateSensorHumedadDto } from './dto/create-sensor-humedad.dto';
import { SensorHumedad } from './entities/sensor-humedad.entity';

@Injectable()
export class SensorHumedadService {
  constructor(
    @Inject('SENSOR_HUMEDAD_REPOSITORY')
    private sensorHumedadRepository: typeof SensorHumedad,
  ) {}

  async create(createSensorHumedadDto: CreateSensorHumedadDto) {
    return this.sensorHumedadRepository.create(
      createSensorHumedadDto as SensorHumedad,
    );
  }

  findAll() {
    return this.sensorHumedadRepository.findAll();
  }
}
