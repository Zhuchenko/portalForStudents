import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from 'react-router/Router'
import createBrowserHistory from 'history/createBrowserHistory'
import AppView from './layout/appview'
import reducer from './rootReducer'
// todo: почему импортируется внутренняя функция, а не creator??
import rootSaga from './rootSaga'
import  { createStore, sagaMiddleware } from './utilities/createStore'
import {init} from './rootActions'

// указывает стратегию, которая используется для маршрутизации
const history = createBrowserHistory();

const store = createStore(reducer);

// запускаем saga
let sagaRun = sagaMiddleware.run(function* () {
    yield rootSaga({ history })
});


store.dispatch(init());


const renderApp = (app) => {
    ReactDOM.render(
        <Provider store={store}>
             <div>
                 <Router history={history}>
                    {app}
                 </Router>
             </div>
        </Provider>,
        document.getElementById('root')
    )
};

renderApp(<AppView />);


// подписка на изменения в указанных модулях - webpack
if (module.hot) {
    module.hot.accept('./layout/appview', () => {
        const nextApp = require('./layout/appview').default;
        renderApp(nextApp)
    });

    module.hot.accept('./rootReducer', () => {
        const nextReducer = require('./rootReducer').default;
        store.replaceReducer(nextReducer)
    });

    module.hot.accept('./rootSaga', () => {
        const newRootSaga = require('./rootSaga').default;
        sagaRun.cancel();
        sagaRun.done.then(() => {
            sagaRun = sagaMiddleware.run(function* replaceSaga() {
                yield newRootSaga({ history })
            })
        })
    })
}