import { handleActions } from 'redux-actions'
import {init, tableLoad, tableClose} from './actions'

const initialState = {
    workweeks: []
};

const reducer = handleActions(
    {
        [init]: () => ({
            ...initialState
        }),

        [tableLoad.REQUEST]: (state) => ({
            ...state,
        }),
        [tableLoad.SUCCESS]: (state, action) => ({
            ...state,
            workweeks: action.payload
        }),
        [tableLoad.FAILURE]: state => ({
            ...state,
            workweeks: []
        }),

        [tableClose.REQUEST]: (state) => ({
            ...state,
        }),
        [tableClose.SUCCESS]: (state) => ({
            ...state,
            workweeks: []
        }),
        [tableClose.FAILURE]: state => ({
            ...state,
        })
    },
    initialState
);

export default reducer;