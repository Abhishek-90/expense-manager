import React from 'react'
import { useState } from "react";
import { modeContext } from "../context/modeContext";
import { useContext } from 'react'
import { transactionContext } from '../context/transactionContext';

export const AddTransaction = (props) => {

    const contextMode = useContext(modeContext);
    const { darkMode } = contextMode;

    const contextTransaction = useContext(transactionContext);
    const { addTransaction, setChange } = contextTransaction;

    const [newTransaction, setNewTransaction] = useState({
        ttype:"",
        tag:"",
        amount:"",
        description:""
    });

    const onChange = (e)=>{
        setNewTransaction({...newTransaction, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e)=>{
        // e.preventDefault();
        addTransaction({
            type: newTransaction.ttype,
            tag: newTransaction.tag,
            description: newTransaction.description,
            amount: newTransaction.amount
        });
        setChange([0]);
    }

    return (
        <div className="container my-4">
            <form onSubmit={onSubmit} className='my-4'>
                        <div className="row">
                            <div className="mt-3 col-sm">
                                <label htmlFor="ttype" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`} >Type</label>
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="ttype" name="ttype" onChange={onChange} >
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} disabled={true} selected>Select Type</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="income">Income</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="expense">Expense</option>
                                    </select>
                                </div>
                            </div>
                            <div className="my-3 col-sm">
                                <label htmlFor="tag" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Tag</label>
                                {newTransaction.ttype === "income" ?
                                <div className="dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="tag" name="tag" onChange={onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="" disabled={true} selected>Select Tag</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Salary">Salary</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Interest">Interest</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Side">Side Income</option>
                                    </select>
                                </div>
                                :
                                <div className="dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="tag" name="tag" onChange={onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="" disabled={true} selected>Select Tag</option>
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
                            <div className="my-3 col-sm">
                                <label htmlFor="amount" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Amount</label>
                                <div className="mx-1 dropdown">
                                <input className="form-control" id="amount" name="amount" onChange={onChange} placeholder="Enter Amount"/>
                                </div>
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="description" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Description</label>
                            <input type="text" className="form-control" id="description" name="description" onChange={onChange} placeholder="Enter Description for the Transaction"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Transaction</button>
                    </form>
        </div>
    )
}
