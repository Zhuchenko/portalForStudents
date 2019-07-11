import React from 'react'
import getFullDate from '../utilities/getFullDate'

const DateControl = () => {
    const date = getFullDate(new Date());

    return (
        <div>
            <h3>{date.date}</h3>
            <h3>{date.dayOfWeek}</h3>
        </div>
    )
};

export default DateControl
