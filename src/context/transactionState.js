import { transactionContext } from "./transactionContext";
import React from 'react'
import { useState } from "react";

const TransactionState = (props) => {
    const host = 'http://localhost:5000/transaction/';

    const [userStatement, setuserStatement] = useState([]);

    const addTransaction = async ( transaction )=>{
        const token = localStorage.getItem('authToken');
        const response = await fetch(
            'http://localhost:5000/transaction/transaction',
            {
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                    'authToken': token
                },
                body:JSON.stringify({
                    type: transaction.ttype,
                    tag: transaction.tag,
                    description: transaction.description,
                    amount: transaction.amount 
                })
            }
        );
        
        const json = await response.json();

        if(json.status === 'success'){
            // navigate('/dashboard');
            console.log(json)
        }
        else{
            console.log(json.error);
        }
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

        // setuserStatement(json);
    }

    const handleDelete = async (id) => {

        const response = await fetch(
            'http://localhost:5000/transaction/remove',
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
        if(json.Message === 'success'){
            console.log(`Transaction with id ${id} DELETED SUCCESSFULLY`);
        }
    }
    
    const handleUpdate = async ( { id, description, amount, tag, type } ) => {
        console.log(`${id} ${type} ${amount} ${tag} ${description}`)
        const response = await fetch(
            'http://localhost:5000/transaction/update',
            {
                method:"PUT",
                headers:{
                    'Content-Type':'application/json',
                    'authToken': localStorage.getItem('authToken')
                },
                body:JSON.stringify({
                    id: id,
                    type: type,
                    description: description,
                    amount: amount,
                    tag:tag
                })
            },
        )

        const json = await response.json();
        if(json.Message === 'success'){
            console.log(`Transaction with id ${id} UPDATED SUCCESSFULLY`);
            return 'success';
        }
    }

    return (
        <transactionContext.Provider value={{fetchTransactions, userStatement, addTransaction, handleDelete, handleUpdate }}>
            {props.children}
        </transactionContext.Provider>
    )
}

export default TransactionState
