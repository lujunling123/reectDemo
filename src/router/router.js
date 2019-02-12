import App from '../App'
import gest from '../gest'
import gestOut from '../gestOut'

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: 'gest', component: About },
        { path: 'gestOut', component: Inbox },
    ]
}

module.exports(routes);
