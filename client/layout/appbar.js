import React, { Component } from 'react'
import UserControls from '../authorization/components/userControls'
import DateControl from '../components/DateControl'
import ButtonPanel from '../buttonPanel/components/buttonPanel'
import classNames from './scss/appbar.module.scss';

class Appbar extends Component {
    render() {
        return (
            <div className={classNames.appbar}>
                <DateControl/>
                <ButtonPanel/>
                <UserControls/>
            </div>
        )
    }
}

export default Appbar
