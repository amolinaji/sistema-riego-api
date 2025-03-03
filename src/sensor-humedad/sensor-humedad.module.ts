import { Module } from '@nestjs/common';
import { SensorHumedadService } from './sensor-humedad.service';
import { SensorHumedadController } from './sensor-humedad.controller';
import { sensorHumedadProviders } from './entities/sensor-humedad.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SensorHumedadController],
  providers: [SensorHumedadService, ...sensorHumedadProviders],
})
export class SensorHumedadModule {}
