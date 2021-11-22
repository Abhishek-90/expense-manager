import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { AddTransaction } from './AddTransaction';
import ShowTransaction from './ShowTransaction';

const Dashboard = () => {
    const navigate = useNavigate();

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
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        console.log(token);
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
            navigate('/dashboard');
        }
        else{
            console.log(json.error);
        }
    }

    return (
        <div className="container">
            <AddTransaction onSubmit={onSubmit} onChange={onChange} transaction={transaction}/>
            <ShowTransaction/>
        </div>
    )
}

export default Dashboard
