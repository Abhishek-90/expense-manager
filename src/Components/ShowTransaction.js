import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { transactionContext } from '../context/transactionContext'
import { modeContext } from "../context/modeContext";

const ShowTransaction = () => {

    const contextTransaction = useContext(transactionContext);
    const { fetchTransactions, userStatement, handleTransactionUpdate, handleDelete } = contextTransaction;  
    const navigate = useNavigate(); 
    
    const contextMode = useContext(modeContext);
    const { darkMode } = contextMode;

    useEffect(() => {
        if(localStorage.getItem('authToken'))
            fetchTransactions();
        else
            navigate('/');
    })

    const [editTransaction, setEditTransaction] = useState({
        eid: "",
        etag: "",
        eamount: "",
        ettype: "",
        edescription: ""
    })

    const refEditButton = useRef(null);
    const refClose = useRef(null);
    

    const onUpdateSubmit = async (e)=>{
        e.preventDefault();

        const response = await handleTransactionUpdate({ 
            id:editTransaction.eid,
            description: editTransaction.edescription,
            amount: editTransaction.eamount,
            tag: editTransaction.etag,
            type: editTransaction.ettype
        })
        
        if(response === 'success'){
            console.log(`Transaction with ID: ${editTransaction.eid} updated successfully.`);
            refClose.current.click();
        }
        else{
            console.log("Update Failed.")
        }
    }

    const onTransactionEdit = (e)=>{
        setEditTransaction({ ...editTransaction, [e.target.name]: e.target.value })
    }

    const editButtonClick = (currentTransaction)=>{
        setEditTransaction({
            eid: currentTransaction._id,
            etag: currentTransaction.tag,
            eamount: currentTransaction.amount,
            ettype: currentTransaction.ttype,
            edescription: currentTransaction.description
        })

        refEditButton.current.click();

    }

    const deleteTransaction = async (id)=>{
        const response = await handleDelete(id);

        if(response === 'success')
            console.log(`Transaction with ID: ${id} deleted.`)
        else
            console.log('Delete Failed');
    }

    return (
        <>
            <button ref={refEditButton} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <select value={ editTransaction.ettype } className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="ettype" name="ettype" onChange={onTransactionEdit}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="income">Income</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="expense">Expense</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="etag" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Tag</label>
                                {editTransaction.ettype === "income" ?
                                <div className="mx-1 dropdown">
                                    <select value={ editTransaction.etag } className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="etag" name="etag" onChange={onTransactionEdit}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Salary">Salary</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Interest">Interest</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Hustle">Side Income</option>
                                    </select>
                                </div>
                                :
                                <div className="mx-1 dropdown">
                                    <select value={ editTransaction.etag }  className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="etag" name="etag" onChange={onTransactionEdit}>
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
                                <input value={editTransaction.eamount} className="form-control" id="eamount" name="eamount" onChange={onTransactionEdit} placeholder="Enter amount for Transaction"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="edescription" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Description</label>
                            <input value={editTransaction.edescription} type="text" className="form-control" id="edescription" name="edescription" onChange={onTransactionEdit} placeholder="Enter Description for the Transaction"/>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Update Changes</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
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
                                        <td><i className="mx-1 far fa-edit" onClick={() => editButtonClick(t)}></i> <i className="mx-1 fas fa-trash-alt" onClick={()=>deleteTransaction(t._id)}></i></td>
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
