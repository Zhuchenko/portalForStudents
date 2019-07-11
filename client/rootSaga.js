import { all } from 'redux-saga/effects'
import authorizationSaga from './authorization/saga'
import buttonPanelSaga from './buttonPanel/saga'
import statusTableSaga from "./StatusTable/saga";

const creator = ({ history }) => {
    function* rootSaga() {
        yield all([
            authorizationSaga(),
            buttonPanelSaga({ history }),
            statusTableSaga()
        ])
    }

    return rootSaga()
};

export default creator