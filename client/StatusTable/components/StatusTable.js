import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import classNames from './scss/StatusTable.module.scss'
import {tableLoad} from '../actions'
import WeekRow from './WeekRow'
import ClockSvg from './ClockSvg'
import * as selectors from '../selectors'
import getClassNames from '../../utilities/getClassnames'

const StatusTable = (props) => {
    const startSelected = useSelector(selectors.isStartSelected);
    const workweeks = useSelector(selectors.workweeks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tableLoad.trigger());
    }, [startSelected, dispatch]);

    if (!workweeks || !workweeks.length) {
        // when TABLE_LOAD_FAILURE
        return (null);
    }

    const headers = [
        {title: 'День', className: 'status-table__head-cell_name-of-day'},
        {title: '№'},
        {title: 'Начало'},
        {title: 'Окончание'},
        {title: 'Время'},
        {title: 'Отчет', className: 'status-table__head-cell_real-time'}
    ];

    const {className} = props;
    const tableClasses = getClassNames({
        [className]: true,
        [classNames['status-table']]: true
    });
    return (
        <table className={tableClasses}>
            <colgroup className={classNames['status-table__col-day']} />
            <colgroup className={classNames['status-table__col-number']}/>
            <colgroup className={classNames['status-table__col-start']} />
            <colgroup className={classNames['status-table__col-finish']}/>
            <colgroup className={classNames['status-table__col-time']} />
            <colgroup className={classNames['status-table__col-real-time']}/>

            <thead>
                <tr>
                {headers.map(th => {
                    const thClasses = getClassNames({
                        [classNames['status-table__head-cell']]: true,
                        [classNames[th.className]]: !!th.className
                    });
                    return (
                        <th className={thClasses} key={th.title}>
                            {th.title}
                            {th.title !== 'Отчет' ? null : <ClockSvg />}
                        </th>
                    );
                })}
                </tr>
            </thead>
            <tbody>
            {workweeks.map(workweek => (
                <WeekRow
                    workweek={workweek}
                    weekRowClasses={classNames['status-table__week-row']}
                    dayRowClasses={classNames['status-table__day-row']}
                    key={workweek.numberOfTheWeek}
                />))}
            </tbody>
        </table>
    );
};

export default StatusTable;