
export const initialState = 0;

const reducer = (state: any, action: any) => {
    //reducer is always pure function & does not produce any side effect
    //A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. 
    console.log("Initial state ", initialState, "action type", action.type, "state", state);
    if (action.type === "Increment") return state + 1;
    else if (action.type === "Decrement") return state - 1;
    return state;

}

export default reducer;