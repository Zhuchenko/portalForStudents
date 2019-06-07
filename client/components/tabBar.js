import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from './scss/tabBar.module.scss'
import getClassNames from "../utilities/getClassnames";

class TabBar extends Component {
    handleClick = (event) => {
        const id = event.target.id;
        this.props.handleChanged(id);
    };

    render() {
        const {tabs, selectedId} = this.props;
        const {tab} = classNames;
        const tab_selected = classNames['tab--selected'];

        const tab_bar = classNames['tab-selected'];

        return (
            <div className={tab_bar}>
                {tabs.map((currentTab) => {
                    const isSelected = (selectedId === currentTab.id);
                    const classes =  getClassNames({[tab]: true, [tab_selected]: isSelected});

                    return <button
                        id={currentTab.id}
                        key={currentTab.id}
                        className={classes}
                        onClick={this.handleClick}>
                        {currentTab.text}
                    </button>
                })}
            </div>
        )
    }
}

TabBar.propTypes = {
    handleChanged: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired,
    selectedId: PropTypes.string.isRequired
};

export default TabBar