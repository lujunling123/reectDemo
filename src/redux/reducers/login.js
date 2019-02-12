import {LOGIN} from 'actions/login';

/*
* 初始化state
 */

const initState = {
    user: 'admin'
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                user: '张三'
            };
        default:
            return state
    }
}