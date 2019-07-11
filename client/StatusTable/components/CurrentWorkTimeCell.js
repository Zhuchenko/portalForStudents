import React, {useEffect, useState} from "react";
import * as moment from "moment";
import {useSelector} from "react-redux";
import * as selectors from '../selectors'

const CurrentWorkTimeCell = ({fullTime, className}) => {
    const [currentWorkTime, setCurrentWorkTime] = useState(0);
    const startSelected = useSelector(selectors.isStartSelected);

    useEffect(() => {
        let timer_id;

        if (startSelected) {
            timer_id = setInterval(() => {
                setCurrentWorkTime(cur => cur + 1);
            }, 60*1000);
        }

        return () => {
            setCurrentWorkTime(0);
            clearInterval(timer_id);
        };
    }, [startSelected]);

    // taken time + current count of minutes
    const currentTime = moment(fullTime, "HH:mm").add(currentWorkTime, "minutes").format("H:mm");
    return (
        <td className={className}>{currentTime}</td>
    )
};

export default CurrentWorkTimeCell;