import React, { useState, useContext } from 'react'
import { AddTransaction } from './AddTransaction';
import ShowTransaction from './ShowTransaction';
import { transactionContext } from '../context/transactionContext';
import { modeContext } from "../context/modeContext";

const Dashboard = () => {
    const contextMode = useContext(modeContext);
    const { darkMode } = contextMode;

    const context = useContext(transactionContext);
    const { addTransaction } = context;
    const [transaction, settransaction] = useState({
        ttype:"income",
        tag:"salary",
        amount:"",
        description:""
    });
    const onChange = (e)=>{
        settransaction({...transaction, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e)=>{
        addTransaction(transaction)
    }

    return (
        <div className='container'>
            <AddTransaction onSubmit={onSubmit} onChange={onChange} transaction={transaction}/>
            <ShowTransaction/>
        </div>
    )
}

export default Dashboard
