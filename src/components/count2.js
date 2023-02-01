import {Count2Reducer} from "../services/count2.reducer";
import {DEC, INC, RESET, SET} from "../services/actions";

const Count2 = () => {

    const [state, dispatch] = Count2Reducer();

    return (
        <div>
            <h3>count2: {state.count2}</h3>
            <button onClick={()=>dispatch({type:INC})}>INC</button>
            <button onClick={()=>dispatch({type:DEC})}>DEC</button>
            <button onClick={()=>dispatch({type:SET,payload:150})}>SET</button>
            <button onClick={()=>dispatch({type:RESET})}>RESET</button>
        </div>
    );
};

export {Count2};