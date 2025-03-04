import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSensorHumedadDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;
}
