import { createAction } from 'redux-actions'
import { createRoutine } from 'redux-saga-routines';

export const init = createAction('INIT');

export const loginRoutine = createRoutine('LOGIN');
export const logoutRoutine = createRoutine('LOGOUT');

export const showForm = createAction('SHOW_FORM');
export const hideForm = createAction('HIDE_FORM');

export const enterEmail = createAction('ENTER_EMAIL');
export const enterPassword = createAction('ENTER_PASSWORD');