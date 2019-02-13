import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bundle from './Bundle';

import App from 'bundle-loader?lazy&name=homeMain!home/App'
import gestout from 'bundle-loader?lazy&name=gestout!home/gest'
import gest from 'bundle-loader?lazy&name=gest!home/gestOut'
import UserInfo from 'bundle-loader?lazy&name=UserInfo!home/UserInfo';
import comtent from 'bundle-loader?lazy&name=comtent!home/comtent';

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
        <div className='main'>
        <ul className='mainLink'>
            <li><Link className='white' to="/">小米商城</Link></li>
            <li><Link className='white' to="/gest">MIUI</Link></li>
            <li><Link className='white' to="/userinfo">LOT</Link></li>
            <li><Link className='white' to="/comtent">云服务</Link></li>
            <li><Link className='white' to="/gest">金融</Link></li>
            <li><Link className='white' to="/userinfo">油瓶</Link></li>
            <li><Link className='white' to="/comtent">comtent</Link></li>
        </ul>
        <Switch>
            <Route exact path="/" component={createComponent(App)}/>
            <Route path="/gest" component={createComponent(gest)}/>
            <Route path="/userinfo" component={createComponent(UserInfo)}/>
            <Route path="/comtent" component={createComponent(comtent)}/>
        </Switch>
        </div>
    </Router>
);


export default getRouter;
