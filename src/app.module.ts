import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorHumedadModule } from './sensor-humedad/sensor-humedad.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SensorHumedadModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
