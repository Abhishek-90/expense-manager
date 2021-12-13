import React from 'react'

import { AddTransaction } from './AddTransaction';
import ShowTransaction from './ShowTransaction';
import { Visual } from './Visual';

const Dashboard = () => {
    // const data = {
    //     labels: [
    //       'Red',
    //       'Blue',
    //       'Yellow'
    //     ],
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [300, 50, 100],
    //       backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(54, 162, 235)',
    //         'rgb(255, 205, 86)'
    //       ],
    //       hoverOffset: 4
    //     }]
    // };

    return (
        <div className='container'>
            <Visual/>
            <AddTransaction />
            <ShowTransaction/>
        </div>
    )
}

export default Dashboard
