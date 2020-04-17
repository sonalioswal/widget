import React, {useState} from 'react';
import {Route, MemoryRouter, Switch} from "react-router-dom";

import WindowHeader from './widget-header/WidgetHeader';
import WidgetMenu from './widget-menu/WidgetMenu';
import WelComePage from '../../routes/welcomePage/WelComePage';
import Chat from '../../routes/chat/Chat';
import BookaDemo from '../../routes/book-a-demo/BookDemo';
import './WidgetWindow.scss';

const WidgetWindow = props => {
    const [isOpenMenu, setOpenMenu] = useState(true);
    const openMenu = () => {
        setOpenMenu(!isOpenMenu)
    }
    return (
        <div className="widget-window">
            <WindowHeader 
                title={props.title} 
                onClose={props.handleToggleButton}
                openMenu={openMenu}
            />
            <MemoryRouter>
                <div className="widget-body">
                    {isOpenMenu && <WidgetMenu openMenu={openMenu}/>}
                </div>
                <Switch>
                    <Route path="/welcomepage" component={WelComePage}></Route> 
                    <Route path="/chat" component={Chat}></Route> 
                    <Route path="/demo" component={BookaDemo}></Route> 
                </Switch>
            </MemoryRouter>
        </div>
    )
}

export default WidgetWindow;