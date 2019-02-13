import {GET_ADD_Number,GET_Jian_Number,GET_react_Number} from "actions/comt"

const initState ={
    count: 0
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_ADD_Number:
            return {
                count: state.count + 1
            };
        case GET_Jian_Number:
            return {
                count: state.count - 1
            };
        case GET_react_Number:
            return {count: 0};
        default:
            return state
    }
}