import React from 'react'

import { AddTransaction } from './AddTransaction';
import ShowTransaction from './ShowTransaction';
import { Visual } from './Visual';

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
