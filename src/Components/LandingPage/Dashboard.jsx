import React from 'react'

import { AddTransaction } from '../Transactions/AddTransaction';
import ShowTransaction from '../Transactions/ShowTransaction';
import { Visual } from '../Charts/Visual';

const Dashboard = () => {
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-sm'>
                    <Visual/>
                </div>
                <div className='col-sm'>
                    <AddTransaction />
                </div>
            </div>
            <ShowTransaction/>
        </div>
    )
}

export default Dashboard
