import { createStore } from "redux";


const reducerFn = (state = {counter : 0}, action : any) => {
if (action.type === "INC"){
    return { counter : state.counter+1 };
}
else if (action.type === "DECRE"){
    return { counter : state.counter-1 };
} else if (action.type === "CLEAR") {
    return { counter : 0 };
} else if (action.type === "ADDBY") {
    return { counter : state.counter + action.payload };
}
return state;
} 

const store = createStore(reducerFn);

export default store;