import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'ALARM_STATE',
  timestamps: true,
})
export class AlarmState extends Model<AlarmState> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
   state: boolean;
}
