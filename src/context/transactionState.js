import { transactionContext } from "./transactionContext";
import React from 'react'
import { useState } from "react";

const TransactionState = (props) => {
    const host = 'http://localhost:5000/transaction/';

    const [transaction, setTransaction] = useState({
        ttype:"income",
        tag:"salary",
        amount:"",
        description:""
    });

    const [userStatement, setuserStatement] = useState([]);

    const addTransaction = (e)=>{
        setTransaction({...transaction, [e.target.name]: e.target.value})
    }

    const fetchTransactions = async () => {
        const response = await fetch(
            `${host}statement`,
            {
                method:'GET',
                headers:{               
                    'Content-Type':'application/json',
                    'authToken': localStorage.getItem('authToken')
                },
            },
        )
        const json = await response.json();

        setuserStatement(json);
    }

    return (
        <transactionContext.Provider value={{transaction, fetchTransactions, userStatement, addTransaction, setuserStatement}}>
            {props.children}
        </transactionContext.Provider>
    )
}

export default TransactionState
