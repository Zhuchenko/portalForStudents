import React, {useCallback, useState} from "react";
import DayRow from './DayRow'
import classNames from './scss/WeekRow.module.scss'
import getClassNames from "../../utilities/getClassnames";

const WeekRow = ({workweek, weekRowClasses, dayRowClasses}) => {
    const [isCollapsed, setCollapse] = useState(false);
    const handleWeekClick = useCallback( () => {
        setCollapse(!isCollapsed);
    }, [isCollapsed]);

    const firstChildClasses = getClassNames({
        [classNames['week-row__cell']]: true,
        [classNames['week-row__cell_name-of-day']]: true
    });
    return (
        <React.Fragment>
            <tr className={weekRowClasses} onClick={handleWeekClick}>
                <th colSpan="6" className={firstChildClasses}>{workweek.numberOfTheWeek}-я неделя</th>
            </tr>
            {isCollapsed ?
                null :
                workweek.daysOfTheWeek.map(workday => <DayRow workday={workday} dayRowClasses={dayRowClasses} key={workday._id}/>)
            }
        </React.Fragment>
    );
};

export default WeekRow;