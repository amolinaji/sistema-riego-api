import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SensorHumedadService } from './sensor-humedad.service';
import { CreateSensorHumedadDto } from './dto/create-sensor-humedad.dto';

@Controller('sensor-humedad')
export class SensorHumedadController {
  constructor(private readonly sensorHumedadService: SensorHumedadService) {}

  @Post()
  async insertValue(@Body() data: CreateSensorHumedadDto) {
    console.log(data);
    return await this.sensorHumedadService.create(data);
  }

  @Get('data/:date')
  async findAllByDate(@Param('date') date: string) {
    return await this.sensorHumedadService.findAllByDate(date);
  }

  @Get('valve/state')
  async getValveState() {
    return await this.sensorHumedadService.getValveState();
  }

  @Get('valve/on')
  async setValveOn() {
    return await this.sensorHumedadService.setValveOn();
  }

  @Get('valve/off')
  async setValveOff() {
    return await this.sensorHumedadService.setValveOff();
  }

  @Get('alarm')
  async getAlarmState() {
    return await this.sensorHumedadService.getAlarmState();
  }

  @Get('alarm/on')
  async setAlarmOn() {
    return await this.sensorHumedadService.setAlarmOn();
  }

  @Get('alarm/off')
 async setAlarmOff() {
    return await this.sensorHumedadService.setAlarmOff();
  }
}
