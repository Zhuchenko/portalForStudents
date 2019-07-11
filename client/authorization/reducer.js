import {handleActions} from 'redux-actions'
import {init, loginRoutine, logoutRoutine, hideForm, showForm, enterEmail, enterPassword} from './actions'

const initialState = {
    isShown: false,
    email: '',
    password: ''
};

const reducer = handleActions(
    {
        [init]: () => ({
            ...initialState
        }),

        [loginRoutine.SUCCESS]: (state, {payload}) => ({
            ...state,
            isShown: false,
            email: payload.name,
            password: ''
        }),

        [loginRoutine.FAILURE]: (state) => ({
            ...state,
            isShown: true,
            email: '',
            password: ''
        }),

        [logoutRoutine.SUCCESS]: state => ({
            ...state,
            isShown: false,
            email: '',
            password: ''
        }),

        [logoutRoutine.FAILURE]: state => ({
            ...state
        }),

        [showForm]: state => ({
            ...state,
            isShown: true,
            email: '',
            password: ''
        }),

        [hideForm]: state => ({
            ...state,
            isShown: false,
            email: '',
            password: ''
        }),

        [enterEmail]: (state, {payload}) => ({
            ...state,
            name: '',
            isShown: true,
            email: payload.email,
        }),

        [enterPassword]: (state, {payload}) => ({
            ...state,
            name: '',
            isShown: true,
            password: payload.password
        }),

    },
    initialState
);

export default reducer