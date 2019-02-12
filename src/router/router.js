import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bundle from './Bundle';

import App from 'bundle-loader?lazy&name=homeMain!home/App'
import gestout from 'bundle-loader?lazy&name=gestout!home/gest'
import gest from 'bundle-loader?lazy&name=gest!home/gestOut'
import UserInfo from 'bundle-loader?lazy&name=UserInfo!home/UserInfo';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
    {
    (Component) => Component ? <Component {...props} /> : <Loading/>
}
</Bundle>
);

const getRouter = () => (
    <Router>
        <div>
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/gest">gest</Link></li>
            <li><Link to="/userinfo">UserInfo</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={createComponent(App)}/>
            <Route path="/gest" component={createComponent(gest)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
        </Switch>
        </div>
    </Router>
);


export default getRouter;
