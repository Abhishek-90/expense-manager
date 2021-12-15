import React from 'react'

import { transactionContext } from '../context/transactionContext'
import { modeContext } from "../context/modeContext";
import { useContext } from 'react';

const Transaction = (props) => {

    const contextTransaction = useContext(transactionContext);
    const { userStatement, handleDelete, setuserStatement } = contextTransaction;  

    const contextMode = useContext(modeContext);
    const { darkMode } = contextMode;

    const deleteTransaction = (id)=>{
        handleDelete(id);
        const newStatement = userStatement.filter(e => e._id !== id);
        setuserStatement(newStatement);
    }

    return (
        <div className="container ml-2">
            <table className={`table-striped table table-${darkMode}`}>
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Tag</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {/* {console.log(userStatement)} */}
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
                                    <td><i className="mx-1 far fa-edit" onClick={() => props.editButtonClick(t)}></i> <i className="mx-1 fas fa-trash-alt" onClick={()=>deleteTransaction(t._id)}></i></td>
                                </tr>
                            </tbody>
                        )
                    })
                }   
            </table>
        </div>
    )
}

export default Transaction
