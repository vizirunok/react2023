import {DEC, INC, RESET, SET} from "./actions";
import {useReducer} from "react";


function reducer(state, action) {
    switch (action.type) {
        case INC:
            return {count1: state.count1 + 1}
        case DEC:
            return {count1: state.count1 - 1}
        case RESET:
            return {count1: 0}
        case SET:
            return {count1: action.payload}
    }
}

const Count1Reducer = () => useReducer(reducer, {count1: 0});

export {Count1Reducer};