import React, {useEffect, useState} from 'react'
import * as ReactDOM from 'react-dom';
import classNames from './scss/popup.module.scss';

const Popup = (props) => {
    let popup = document.createElement('div');
    popup.className = classNames.popup;
    const [modal, setModal] = useState(popup);

    useEffect(() => {
        document.getElementById('root').appendChild(modal);
        return () => {
            document.getElementById('root').removeChild(modal)
        }
    });

    return ReactDOM.createPortal(
        props.children,
        modal
    );
};

export default Popup