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
            <div className="form-container">
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="address"
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                            type: 'ADD_CUSTOMER',
                            payload: { name, email, address, phone },
                        });
                    }}
                >
                    ADD
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                            type: 'DELETE_CUSTOMER',
                            payload: { name, email, address, phone },
                        });
                    }}
                >
                    DELETE
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({
                            type: 'UPDATE_CUSTOMER',
                            payload: { name, email, address, phone },
                        });
                    }}
                >
                    UPDATE
                </button>
            </div>
            <div className="customer-list">
                {customers.map((customer, index) => (
                    <div key={index}>
                        <p>
                            {customer.name} - {customer.email} - {customer.address} -{' '}
                            {customer.phone}
                        </p>
                    </div>
                ))}
            </div>
        </>



    )
}

export default App
