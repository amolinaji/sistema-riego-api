import { SensorHumedad } from './sensor-humedad.entity';
export const sensorHumedadProviders = [
  {
    provide: 'SENSOR_HUMEDAD_REPOSITORY',
    useValue: SensorHumedad,
  },
];
