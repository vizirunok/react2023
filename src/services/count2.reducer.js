import {useReducer} from "react";

import {DEC, INC, RESET, SET} from "./actions";


const reducer = (state, action) => {
    switch (action.type) {
        case INC:
            return {count2: state.count2 + 1}
        case DEC:
            return {count2: state.count2 - 1}
        case SET:
            return {count2: action.payload}
        case RESET:
            return {count2: 0}
    }
};

const Count2Reducer = () => useReducer(reducer, {count2: 0});

export {Count2Reducer};