/* eslint react/prop-types: 0 */
import React from 'react';
import {Link} from "react-router-dom";

import './WidgetMenu.scss';

const WidgetMenu = props => {
    return (
        <div className="widget-menu">
            <Link className="widget-menu-link" to="/welcomepage" onClick={props.openMenu}>Home</Link>
            <Link className="widget-menu-link" to="/chat" onClick={props.openMenu}>Chat</Link>
            <Link className="widget-menu-link" to="/demo" onClick={props.openMenu}>Book a demo</Link>
        </div>
    )
}

export default WidgetMenu;