import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'VALVE_STATE',
  timestamps: true,
})
export class ValveState extends Model<ValveState> {
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
