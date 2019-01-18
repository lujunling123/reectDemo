import App from '../src/App'
import gest from '../src/gest'
import gestOut from '../src/gestOut'

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: 'gest', component: About },
        { path: 'gestOut', component: Inbox },
    ]
}

module.exports(routes);
