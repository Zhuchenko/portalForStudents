import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {startRoutine, finishRoutine} from '../actions'
import getClassNames from '../../utilities/getClassnames'
import classNames from './scss/buttonPanel.module.scss'
import * as selectors from '../selectors'

const ButtonPanel = () => {
    const dispatch = useDispatch();
    const handleStartClick = useCallback(
        () => dispatch(startRoutine.trigger()),
        [dispatch]
    );
    const handleFinishClick = useCallback(
        () => dispatch(finishRoutine.trigger()),
        [dispatch]
    );

    const authorized = useSelector(selectors.isAuthorized);
    const startSelected = useSelector(selectors.isStartSelected);
    if(!authorized){
        return (null);
    }

    const {button} = classNames;
    const button_highlighted = classNames['button--highlighted'];
    const startClasses = getClassNames({[button]: true, [button_highlighted]: !startSelected});
    const finishClasses = getClassNames({[button]: true, [button_highlighted]: startSelected});

    const button_panel = classNames['button-panel'];

    return (
        <div className={button_panel}>
            <button onClick={handleStartClick} className={startClasses} disabled={startSelected}>Начать</button>
            <button onClick={handleFinishClick} className={finishClasses} disabled={!startSelected}>Закончить</button>
        </div>
    );
};

export default ButtonPanel;