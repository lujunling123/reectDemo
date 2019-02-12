import counter from 'reducers/counter';
import login from 'reducers/login';
import userInfo from 'reducers/userInfo';

export default function combineReducers(state = {}, action) {
    return {
        count: counter(state.counter, action),
        user: login(state.counter, action),
        userInfo: userInfo(state.userInfo, action)
    }
}