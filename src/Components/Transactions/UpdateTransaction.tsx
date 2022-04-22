import React, { useRef } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { modeContext } from '../../context/modeContext'
import { transactionContext } from '../../context/transactionContext'

const UpdateTransaction = () => {

    const contextTransaction:any = useContext(transactionContext);

    const { handleTransactionUpdate } = contextTransaction;

    const [editTransaction, setEditTransaction] = useState({
        eid: "",
        etag: "",
        eamount: "",
        ettype: "",
        edescription: ""
    })

    const onChange = (e) => {
        setEditTransaction({...editTransaction, [e.target.name]:e.target.value})
    }
    const refEditButton = useRef(null);

    const contextMode:any = useContext(modeContext);
    const { darkMode } = contextMode;

    const onUpdateSubmit = async (e)=>{
        e.preventDefault();

        const response = await handleTransactionUpdate({ 
            id:editTransaction.eid,
            description: editTransaction.edescription,
            amount: editTransaction.eamount,
            tag: editTransaction.etag,
            type: editTransaction.ettype
        })
        
        if(response === 'success')
            console.log(`Transaction with ID: ${editTransaction.eid} updated successfully.`);
        else{
            console.log("Update Failed.")
        }
    }

    return (
        <div>
            <button ref={refEditButton} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                <form onSubmit={onUpdateSubmit}>
                        <div className="row">
                            <div className="mb-3 col-sm">
                                <label htmlFor="ettype" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`} >Type</label>
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="ettype" name="ettype" onChange={onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="income">Income</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="expense">Expense</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="etag" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Tag</label>
                                {editTransaction.ettype === "income" ?
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="etag" name="etag" onChange={onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Salary">Salary</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Interest">Interest</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Hustle">Side Income</option>
                                    </select>
                                </div>
                                :
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="etag" name="etag" onChange={onChange}>
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
                                <label htmlFor="eamount" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Amount</label>
                                <div className="mx-1 dropdown">
                                <input className="form-control" id="eamount" name="eamount" onChange={onChange} placeholder="Enter amount for Transaction"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="edescription" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Description</label>
                            <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} placeholder="Enter Description for the Transaction"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Changes</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default UpdateTransaction
