import { PartialType } from '@nestjs/mapped-types';
import { CreateSensorHumedadDto } from './create-sensor-humedad.dto';

export class UpdateSensorHumedadDto extends PartialType(
  CreateSensorHumedadDto,
) {}
