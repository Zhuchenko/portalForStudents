import { createAction } from 'redux-actions'
import { createRoutine } from 'redux-saga-routines';

export const init = createAction('INIT');

export const tableLoad = createRoutine('TABLE_LOAD');
export const tableClose = createRoutine('TABLE_CLOSE');