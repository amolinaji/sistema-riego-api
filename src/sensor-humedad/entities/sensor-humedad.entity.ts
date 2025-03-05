import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'SENSOR_HUMEDAD_DATA',
  timestamps: true,
})
export class SensorHumedad extends Model<SensorHumedad> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare value: number;
}
