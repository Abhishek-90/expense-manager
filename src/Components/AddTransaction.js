import React from 'react'
import { modeContext } from "../context/modeContext";
import { useContext } from 'react'

export const AddTransaction = (props) => {

    const contextMode = useContext(modeContext);
    const { darkMode } = contextMode;

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
                    <form onSubmit={props.onSubmit}>
                        <div className="row">
                            <div className="mb-3 col-sm">
                                <label htmlFor="ttype" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`} >Type</label>
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="ttype" name="ttype" onChange={props.onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="income">Income</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="expense">Expense</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="tag" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Tag</label>
                                {props.transaction.ttype === "income" ?
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="tag" name="tag" onChange={props.onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="salary">Salary</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="interest">Interest</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="fsalary">Side Income</option>
                                    </select>
                                </div>
                                :
                                <div className="mx-1 dropdown">
                                    <select className={`mx-3 btn dropdown-toggle text-${darkMode === 'dark' ? 'light':'dark'}`} id="tag" name="tag" onChange={props.onChange}>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="shopping">Shopping</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="health">Health</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="Savings">Savings</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="entertainment">Entertainment</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="drinking">Drinks/Eating</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="bills">Bills</option>
                                        <option className={`bg-${darkMode ==='dark' ? 'dark':'light'}`} value="trip">Trips</option>
                                    </select>
                                </div>
                                }
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="amount" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Amount</label>
                                <div className="mx-1 dropdown">
                                <input className="form-control" id="amount" name="amount" onChange={props.onChange} placeholder="Enter amount for Transaction"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className={`form-label text-${darkMode === 'dark' ? 'light':'dark'}`}>Description</label>
                            <input type="text" className="form-control" id="description" name="description" onChange={props.onChange} placeholder="Enter Description for the Transaction"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add Transaction</button>
                    </form>
                </div>
            </div>
           </div>
        </div>
    )
}
