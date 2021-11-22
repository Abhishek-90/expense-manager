import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { transactionContext } from '../context/transactionContext';
import { modeContext } from "../context/modeContext";

const ShowTransaction = () => {
    const context = useContext(transactionContext);
    const { fetchTransactions, userStatement} = context;  
    const navigate = useNavigate(); 
    
    const contextMode = useContext(modeContext);
    const { darkMode } = contextMode;

    useEffect(() => {
        if(localStorage.getItem('authToken'))
            fetchTransactions();
        else
            navigate('/');
    })

    return (
        <>
            <div className="container ml-2">
                <table className={`table-striped table table-${darkMode}`}>
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Tag</th>
                        </tr>
                    </thead>
                    {
                        userStatement.map((t)=>{
                            return (
                                <tbody key={t._id}>
                                    <tr className= {`table-${t.type === 'income' ? 'success' : 'danger'}`}>
                                        <td>{t.date.split('T')[0]}</td>
                                        <td>{t.amount}</td>
                                        <td>{t.type}</td>
                                        <td>{t.description}</td>
                                        <td>{t.tag}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }   
                </table>
            </div>
        </>
    )
}

export default ShowTransaction
