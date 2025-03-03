import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSensorHumedadDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsBoolean()
  valveState: boolean;

  @IsNotEmpty()
  @IsBoolean()
  alarmState: boolean;
}
