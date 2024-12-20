
import './App.css'
import {useReducer} from "react";



const initialState = 0;

function CounterReducer(state: number = initialState, action: {type:string ,payload:number}) {

    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }

}

function App() {
    const [count,dispatch] = useReducer(CounterReducer,initialState);

    return (
    <>
        {count}
        <button onClick={() => dispatch({type:'INCREMENT',payload:1})}>Increment</button>
        <button onClick={()=> dispatch({type:'DECREMENT',payload:1})}>Decrement</button>
    </>
  )
}

export default App
