import React from 'react'
import { AddTransaction } from './AddTransaction';
import ShowTransaction from './ShowTransaction';

const Dashboard = () => {

    return (
        <div className='container'>
            <AddTransaction />
            <ShowTransaction/>
        </div>
    )
}

export default Dashboard
