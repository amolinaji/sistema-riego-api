import { Module } from '@nestjs/common';
import { SensorHumedadService } from './sensor-humedad.service';
import { SensorHumedadController } from './sensor-humedad.controller';
import { sensorHumedadProviders } from './entities/sensor-humedad.providers';
import { DatabaseModule } from 'src/database/database.module';
import { valveStateRepository } from './entities/valve-state.providers';
import { alarmStateRepository } from './entities/alarm-state.providers';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';

@Module({
  imports: [DatabaseModule, WebsocketGateway],
  controllers: [SensorHumedadController],
  providers: [
    WebsocketGateway,
    SensorHumedadService,
    ...sensorHumedadProviders,
    ...valveStateRepository,
    ...alarmStateRepository,
  ],
})
export class SensorHumedadModule {}
