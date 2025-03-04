import { ValveState } from './valve-state.entity';
export const valveStateRepository = [
  {
    provide: 'VALVE_STATE_REPOSITORY',
    useValue: ValveState,
  },
];
