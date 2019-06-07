import {handleActions} from 'redux-actions'
import * as actions from './actions'

const initialState = {
    isShown: false,
    email: '',
    password: '',
    username: ''
};

const reducer = handleActions(
    {
        [actions.init]: state => ({
            ...state,
            isShown: initialState.isShown,
            email: initialState.email,
            password: initialState.password,
            username: initialState.username
        }),

        [actions.signinSuccess]: state => ({
            ...state,
            isShown: false,
            email: '',
            password: '',
            username: ''
        }),

        [actions.signinFailure]: state => ({
            ...state,
            isShown: true,
            email: '',
            password: '',
            username: ''
        }),

        [actions.signupSuccess]: state => ({
            ...state,
            isShown: false,
            email: '',
            password: '',
            username: ''
        }),

        [actions.signupFailure]: state => ({
            ...state,
            isShown: true,
            email: '',
            password: '',
            username: ''
        }),

        [actions.signoutSuccess]: state => ({
            ...state,
            isShown: false,
            email: '',
            password: '',
            username: ''
        }),

        [actions.signoutFailure]: state => ({
            ...state,
            isShown: false,
            email: '',
            password: '',
            username: ''
        }),

        [actions.showForm]: state => ({
            ...state,
            isShown: true,
            email: '',
            password: '',
            username: ''
        }),

        [actions.hideForm]: state => ({
            ...state,
            isShown: false,
            email: '',
            password: '',
            username: ''
        }),

        [actions.enterEmail]: (state, {payload}) => ({
            ...state,
            email: payload.email,
        }),

        [actions.enterPassword]: (state, {payload}) => ({
            ...state,
            password: payload.password
        }),

        [actions.enterUsername]: (state, {payload}) => ({
            ...state,
            username: payload.username
        }),
    },
    initialState
);

export default reducer