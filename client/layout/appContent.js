import React from 'react'
import StatusTable from '../StatusTable/components/StatusTable'
import classNames from './scss/appContent.module.scss';
import {connect} from 'react-redux';
import * as actions from '../StatusTable/actions';

class AppContent extends React.Component {
    render() {
        const authorized = this.props.authorized;

        if (!authorized) {
            return (null);
        } else {
            return (
                <div className={classNames['app-content']}>
                    <StatusTable className={classNames['app-content__main']}/>
                </div>
            )
        }
    }
}

export default connect(state => ({
    authorized: state.application.authorized,
}), actions)(AppContent);