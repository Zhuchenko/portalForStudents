import { combineReducers } from 'redux'
import application from './applicationReducer'
import authorization from './authorization/reducer'
import buttonPanel from './buttonPanel/reducer'
import statusTable from './StatusTable/reducer'

export default combineReducers({
    application,
    authorization,
    buttonPanel,
    statusTable
})