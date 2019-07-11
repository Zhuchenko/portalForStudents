import { createAction } from 'redux-actions'
import { createRoutine } from 'redux-saga-routines';

export const init = createAction('INIT');

export const startRoutine = createRoutine('START');
export const finishRoutine = createRoutine('FINISH');