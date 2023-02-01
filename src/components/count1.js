import {Count1Reducer} from "../services/count1.reducer";
import {DEC, INC, RESET, SET} from "../services/actions";

const Count1 = () => {

    const [state, dispatch] = Count1Reducer();

    return (
        <div>
            <h3>count1: {state.count1}</h3>
            <button onClick={()=>dispatch({type:INC})}>INC</button>
            <button onClick={()=>dispatch({type:DEC})}>DEC</button>
            <button onClick={()=>dispatch({type:SET, payload: 150})}>SET</button>
            <button onClick={()=>dispatch({type:RESET})}>RESET</button>
        </div>
    );

};

export {Count1};