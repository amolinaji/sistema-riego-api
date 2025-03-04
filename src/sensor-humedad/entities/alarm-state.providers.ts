import { AlarmState } from './alarm-state.entity';
export const alarmStateRepository = [
  {
    provide: 'ALARM_STATE_REPOSITORY',
    useValue: AlarmState,
  },
];
