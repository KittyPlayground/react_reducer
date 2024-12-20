import './App.css'
import {useReducer, useState} from "react";
import {initialState, CustomerReducer} from "./reducers/CustomerReducer.tsx";

function App() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [customers, dispatch] = useReducer(CustomerReducer, initialState);


    return (
        <>
            <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)}/>
            <input type='text' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <input type='text' placeholder='address' onChange={(e) => setAddress(e.target.value)}/>
            <input type='text' placeholder='phone' onChange={(e) => setPhone(e.target.value)}/>
            <button onClick={() => dispatch({type: 'ADD_CUSTOMER', payload: {name, email, address, phone}})}>ADD
            </button>
            <button onClick={() => dispatch({type: 'DELETE_CUSTOMER', payload: {name, email, address, phone}})}>DELETE
            </button>
            <button onClick={() => dispatch({type: 'UPDATE_CUSTOMER', payload: {name, email, address, phone}})}>UPDATE
            </button>
            {
               customers.map((customers, index) =>(
                   <div key={index}>
                       <p>{customers.name}-{customers.email}-{customers.address}-{customers.phone}</p>
                   </div>
               ))

            }

        </>

    )
}

export default App
