import React, { Component } from 'react'
import Appbar from './appbar';
import classNames from './scss/appview.module.scss';
import AppContent from "./appContent";

class AppView extends Component {
    render() {
        return (
            <div className={classNames.appview}>
                <Appbar/>
                <AppContent/>
            </div>
        )
    }
}

export default AppView

