/* eslint react/prop-types: 0 */
import React from 'react';

import '../WidgetWindow.scss';

const WidgetHeader = props => {
    return (
        <div className="widget-header">
            <button onClick={props.openMenu}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div>{props.title}</div>
            <button onClick={props.onClose}>close</button>
        </div>
    )
}

export default WidgetHeader;