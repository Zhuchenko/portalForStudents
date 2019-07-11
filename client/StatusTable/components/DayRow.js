import React from "react";
import * as moment from "moment";
import CurrentWorkTimeCell from "./CurrentWorkTimeCell"
import classNames from "./scss/DayRow.module.scss"
import getClassNames from "../../utilities/getClassnames";

const DayRow = (props) => {
    const {
        nameOfTheDay,
        numberOfTheDay,
        fullTime,
        realTime,
        timestamps,
        dayRowClasses
    } = props.workday;

    const nameOfDayClasses = getClassNames({[classNames['day-row__cell']]: true, [classNames['day-row__cell_name-of-day']]: true});
    const timestampClasses = getClassNames({[classNames['day-row__cell']]: true, [classNames['day-row__cell_timestamp']]: true});

    return (
        <tr className={dayRowClasses}>
            <td className={nameOfDayClasses}>{nameOfTheDay}</td>
            <td className={classNames['day-row__cell']}>{numberOfTheDay}</td>

            <td className={timestampClasses}>
                {timestamps.map((timestamp, index)=> (
                    <div key={index}>
                        {timestamp.startTime}
                    </div>
                ))}
            </td>
            <td className={timestampClasses}>
                {timestamps.map((timestamp, index) =>
                    <div key={index}>
                        {timestamp.finishTime}
                        &nbsp;
                    </div>
                )}
            </td>

            {(numberOfTheDay === moment().date()
                    ? <CurrentWorkTimeCell fullTime={fullTime} className={classNames['day-row__cell']} />
                    : <td className={classNames['day-row__cell']}>{fullTime}</td>
            )}

            <td className={classNames['day-row__cell']}>{realTime}</td>
        </tr>
    )
};

export default DayRow;