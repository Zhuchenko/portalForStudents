import { handleActions } from 'redux-actions'
import {init, startRoutine, finishRoutine} from './actions'

const initialState = {
    startSelected: false,
    startTime: ''
};

const reducer = handleActions(
    {
        [init]: () => ({
            ...initialState
        }),

        [startRoutine.REQUEST]: (state) => ({
            ...state,
            startSelected: true
        }),
        [startRoutine.SUCCESS]: (state) => ({
            ...state
        }),
        [startRoutine.FAILURE]: state => ({
            ...state,
            startSelected: false
        }),

        [finishRoutine.REQUEST]: (state) => ({
            ...state,
            startSelected: false
        }),
        [finishRoutine.SUCCESS]: state => ({
            ...state,
            startSelected: false,
            startTime: ''
        }),
        [finishRoutine.FAILURE]: state => ({
            ...state,
            startSelected: true
        }),
    },
    initialState
);

export default reducer