import React from 'react'

import { AddTransaction } from './AddTransaction';
import ShowTransaction from './ShowTransaction';
import { Visual } from './Visual';

const Dashboard = () => {
    return (
        <div className='container'>
            <Visual/>
            <AddTransaction />
            <ShowTransaction/>
        </div>
    )
}

export default Dashboard
