import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SignInDialog from './signInDialog'
import classNames from "./scss/button.module.scss";
import * as selectors from "../selectors";
import {logoutRoutine} from "../actions";

const UserControls = (props) => {
    const dispatch = useDispatch();
    const handleLogOutClick = useCallback(
        () => dispatch(logoutRoutine.trigger()),
        [dispatch]
    );

    const authorized = useSelector(selectors.isAuthorized);
    if (!authorized) {
        return <SignInDialog/>
    }

    const {appbar__button} = classNames;

    return (
        <button onClick={handleLogOutClick} className={appbar__button}>
            Sign out {props.email}
        </button>
    );
};

export default UserControls;