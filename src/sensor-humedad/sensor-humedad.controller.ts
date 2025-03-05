import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SensorHumedadService } from './sensor-humedad.service';
import { CreateSensorHumedadDto } from './dto/create-sensor-humedad.dto';

@Controller('sensor-humedad')
export class SensorHumedadController {
  constructor(private readonly sensorHumedadService: SensorHumedadService) {}

  @Post()
  insertValue(@Body() data: CreateSensorHumedadDto) {
    console.log(data);
    return this.sensorHumedadService.create(data);
  }

  @Get('data/:date')
  findAllByDate(@Param('date') date: string) {
    return this.sensorHumedadService.findAllByDate(date);
  }

  @Get('valve/state')
  getValveState() {
    return this.sensorHumedadService.getValveState();
  }

  @Get('valve/on')
  setValveOn() {
    return this.sensorHumedadService.setValveOn();
  }

  @Get('valve/off')
  setValveOff() {
    return this.sensorHumedadService.setValveOff();
  }

  @Get('alarm')
  getAlarmState() {
    return this.sensorHumedadService.getAlarmState();
  }

  @Get('alarm/on')
  setAlarmOn() {
    return this.sensorHumedadService.setAlarmOn();
  }

  @Get('alarm/off')
  setAlarmOff() {
    return this.sensorHumedadService.setAlarmOff();
  }
}
