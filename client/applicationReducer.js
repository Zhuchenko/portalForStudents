import { handleActions } from 'redux-actions'
import * as application from './applicationActions'
import * as authorization from './authorization/actions'

const initialState = {
    authorized: false,
    name: '',
};

const reducer = handleActions(
    {
        [application.init]: () => ({
            ...initialState
        }),

        [authorization.loginRoutine.SUCCESS]: (state, {payload}) => ({
            ...state,
            authorized: true,
            name: payload.name,
        }),

        [authorization.logoutRoutine.SUCCESS]: (state) => ({
            ...state,
            authorized: false,
            name: '',
        })
    },
    initialState
);

export default reducer