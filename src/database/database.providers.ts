import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { SensorHumedad } from 'src/sensor-humedad/entities/sensor-humedad.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: 3306,
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
      });
      sequelize.addModels([SensorHumedad]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
