import React from 'react'

export const AddTransaction = (props) => {
    return (
        <div className="accordion container my-4" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Add Another Transaction
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <form onSubmit={props.onSubmit}>
                        <div className="row">
                            <div className="mb-3 col-sm">
                                <label htmlFor="ttype" className="form-label">Type</label>
                                <div className="mx-1 dropdown">
                                    <select className="mx-3 btn dropdown-toggle" id="ttype" name="ttype" onChange={props.onChange}>
                                        <option value="income">Income</option>
                                        <option value="expense">Expense</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                {props.transaction.ttype === "income" ?
                                <div className="mx-1 dropdown">
                                    <select className="mx-3 btn dropdown-toggle" id="tag" name="tag" onChange={props.onChange}>
                                        <option value="salary">Salary</option>
                                        <option value="interest">Interest</option>
                                        <option value="fsalary">Side Income</option>
                                    </select>
                                </div>
                                :
                                <div className="mx-1 dropdown">
                                    <select className="mx-3 btn dropdown-toggle" id="tag" name="tag" onChange={props.onChange}>
                                        <option value="shopping">Shopping</option>
                                        <option value="health">Health</option>
                                        <option value="Savings">Savings</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="drinking">Drinks/Eating</option>
                                        <option value="bills">Bills</option>
                                        <option value="trip">Trips</option>
                                    </select>
                                </div>
                                }
                            </div>
                            <div className="mb-3 col-sm">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <div className="mx-1 dropdown">
                                <input className="form-control" id="amount" name="amount" onChange={props.onChange} placeholder="Enter amount for Transaction"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
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
