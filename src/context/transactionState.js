import { transactionContext } from "./transactionContext";
import React from 'react'
import { useState } from "react";
import { transaction } from '../Variables/routes';
const TransactionState = (props) => {
    const host = transaction;

    const [userStatement, setuserStatement] = useState([]);
    const [change, setChange] = useState([0]);

    const addTransaction = async ( { type, tag, description, amount} )=>{
        //  Function to add new Transaction inside database. 
        const token = localStorage.getItem('authToken');

        const response = await fetch(
            `${host}addtransaction`,
            {
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                    'authToken': token
                },
                body:JSON.stringify({
                    type: type,
                    tag: tag,
                    description: description,
                    amount: amount 
                })
            }
        );
        
        const json = await response.json();
        setuserStatement(userStatement.concat(json.statement));
        console.log(json.statement);
    }

    const fetchTransactions = async () => {
        // Function to fetch Users' Transactions.
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
        console.log(json);
        setuserStatement(json.statement);
    }

    const handleDelete = async (id) => {

        const response = await fetch(
            `${host}remove`,
            {
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json',
                    'authToken': localStorage.getItem('authToken')
                },
                body:JSON.stringify({
                    id: id
                })
            },
        )

        const json = await response.json();
        
        if(json.status === 'success'){
            return 'success';
        }
    }
    
    const handleTransactionUpdate = async ( update ) => {
        // Function to Update existing transaction of the User.

        console.log(update);

        const response = await fetch(
            `${host}update`,
            {
                method:"PUT",
                headers:{
                    'Content-Type':'application/json',
                    'authToken': localStorage.getItem('authToken')
                },
                body:JSON.stringify({
                    id: update.id,
                    type: update.type,
                    description: update.description,
                    amount: update.amount,
                    tag:update.tag
                })
            },
        )

        const json = await response.json();
        if(json.status === 'success'){
            setChange([0]);
            return 'success';
        }
    }

    return (
        <transactionContext.Provider value={{fetchTransactions, userStatement, addTransaction, handleTransactionUpdate, handleDelete, setuserStatement, setChange, change}}>
            {props.children}
        </transactionContext.Provider>
    )
}

export default TransactionState
