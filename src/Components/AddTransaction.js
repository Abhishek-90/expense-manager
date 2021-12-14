import React from 'react'
import { useState } from "react";
import { modeContext } from "../context/modeContext";
import { useContext } from 'react'
import { transactionContext } from '../context/transactionContext';

export const AddTransaction = (props) => {

    const contextMode = useContext(modeContext);
    const { darkMode } = contextMode;

    const contextTransaction = useContext(transactionContext);
    const { addTransaction, setuserStatement, userStatement } = contextTransaction;

    const [newTransaction, setNewTransaction] = useState({
        ttype:"income",
        tag:"salary",
        amount:"",
        description:""
    });

    const onChange = (e)=>{
        setNewTransaction({...newTransaction, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e)=>{
        setuserStatement(userStatement.append(newTransaction));
        addTransaction({
            type: newTransaction.ttype,
            tag: newTransaction.tag,
            description: newTransaction.description,
            amount: newTransaction.amount
        });
    }

    return (
        <div className={`accordion container my-4 `} id="accordionExample">
            <div className={`accordion-item bg-${darkMode}`}>
                <h2 className="accordion-header" id="headingOne">
                <button className={`accordion-button bg-${darkMode ==='dark' ? 'dark':'light'} text-${darkMode === 'dark' ? 'light':'dark'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Add Another Transaction
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="mb-3 col-sm">
                                <label htmlFor="ttype" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`} >Type</label>
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="ttype" name="ttype" onChange={onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="income">Income</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="expense">Expense</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="tag" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Tag</label>
                                {newTransaction.ttype === "income" ?
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="tag" name="tag" onChange={onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Salary">Salary</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Interest">Interest</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Hustle">Side Income</option>
                                    </select>
                                </div>
                                :
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="tag" name="tag" onChange={onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Shopping">Shopping</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Health">Health</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Savings">Savings</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Entertainment">Entertainment</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Drinking">Drinks/Eating</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Bills">Bills</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Trip">Trips</option>
                                    </select>
                                </div>
                                }
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="amount" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Amount</label>
                                <div className="mx-1 dropdown">
                                <input className="form-control" id="amount" name="amount" onChange={onChange} placeholder="Enter amount for Transaction"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Description</label>
                            <input type="text" className="form-control" id="description" name="description" onChange={onChange} placeholder="Enter Description for the Transaction"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Transaction</button>
                    </form>
                </div>
            </div>
           </div>
        </div>
    )
}
