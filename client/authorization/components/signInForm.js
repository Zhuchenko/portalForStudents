import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import classNames from './scss/signInForm.module.scss'
import * as selectors from "../selectors";
import {loginRoutine, hideForm, enterEmail, enterPassword} from "../actions";

const SignInForm = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectors.email);
    const password = useSelector(selectors.password);
    const handleHideFormClick = () => {
        dispatch(hideForm());
    };

    const handleChangedEmail = (event) => {
        const email = event.target.value;
        dispatch(enterEmail({email}));
    };

    const handleChangedPassword = (event) => {
        const password = event.target.value;
        dispatch(enterPassword({password}));
    };

    const handleSignInClick = useCallback(
        () => dispatch(loginRoutine.trigger({email, password})),
        [dispatch, email, password]
    );

    const {signIn__form, signIn__headline, signIn__input, signIn__button} = classNames;
    const signIn__button_panel = classNames['signIn__button-panel'];

    return (
        <div className={signIn__form}>
            <h3 className={signIn__headline}>LOGIN</h3>
            <input
                type='text'
                placeholder="email"
                onChange={handleChangedEmail}
                value={email}
                className={signIn__input}/>
            <input
                type='text'
                placeholder="password"
                onChange={handleChangedPassword}
                value={password}
                className={signIn__input}/>

            <div className={signIn__button_panel}>
                <button onClick={handleSignInClick} className={signIn__button}>Sign in</button>
                <button onClick={handleHideFormClick} className={signIn__button}>Cancel</button>
            </div>
        </div>
    )

};

export default SignInForm