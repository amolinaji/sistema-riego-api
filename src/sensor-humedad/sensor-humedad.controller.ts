import { Controller, Get, Post, Body } from '@nestjs/common';
import { SensorHumedadService } from './sensor-humedad.service';
import { CreateSensorHumedadDto } from './dto/create-sensor-humedad.dto';

@Controller('sensor-humedad')
export class SensorHumedadController {
  constructor(private readonly sensorHumedadService: SensorHumedadService) {}

  @Post()
  create(@Body() createSensorHumedadDto: CreateSensorHumedadDto) {
    return this.sensorHumedadService.create(createSensorHumedadDto);
  }

  @Get()
  findAll() {
    return this.sensorHumedadService.findAll();
  }
}
