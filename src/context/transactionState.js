import { transactionContext } from "./transactionContext";
import React from 'react'
import { useState } from "react";

const TransactionState = (props) => {
    const host = 'http://localhost:5000/transaction/';

    const [userStatement, setuserStatement] = useState([]);
    
    const addTransaction = async ( { type, tag, description, amount} )=>{
        //  Function to add new Transaction inside database. 

        const token = localStorage.getItem('authToken');

        const response = await fetch(
            'http://localhost:5000/transaction/addtransaction',
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

        if(json.status === 'success'){
            // navigate('/dashboard');
            console.log(json)
        }
        else{
            console.log(json.error);
        }
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
        
        if(json.status === 'success'){
            if(json.statement !== [])
                setuserStatement(json.statement);
            else
                setuserStatement([]);
        }
    }

    // const handleDelete = async (id) => {

    //     const response = await fetch(
    //         'http://localhost:5000/transaction/remove',
    //         {
    //             method:"DELETE",
    //             headers:{
    //                 'Content-Type':'application/json',
    //                 'authToken': localStorage.getItem('authToken')
    //             },
    //             body:JSON.stringify({
    //                 id: id
    //             })
    //         },
    //     )

    //     const json = await response.json();
    //     if(json.Message === 'success'){
    //         console.log(`Transaction with id ${id} DELETED SUCCESSFULLY`);
    //     }
    // }
    
    // const handleUpdate = async ( { id, description, amount, tag, type } ) => {
    //     console.log(`${id} ${type} ${amount} ${tag} ${description}`)
    //     const response = await fetch(
    //         'http://localhost:5000/transaction/update',
    //         {
    //             method:"PUT",
    //             headers:{
    //                 'Content-Type':'application/json',
    //                 'authToken': localStorage.getItem('authToken')
    //             },
    //             body:JSON.stringify({
    //                 id: id,
    //                 type: type,
    //                 description: description,
    //                 amount: amount,
    //                 tag:tag
    //             })
    //         },
    //     )

    //     const json = await response.json();
    //     if(json.Message === 'success'){
    //         console.log(`Transaction with id ${id} UPDATED SUCCESSFULLY`);
    //         return 'success';
    //     }
    // }

    return (
        <transactionContext.Provider value={{fetchTransactions, userStatement, addTransaction }}>
            {props.children}
        </transactionContext.Provider>
    )
}

export default TransactionState
