import React, { useContext } from 'react'

import 'chart.js/auto'
import { Pie } from 'react-chartjs-2';
import { transactionContext } from '../context/transactionContext'

const Visual = () => {
    const contextTransaction = useContext(transactionContext);
    // const { expense } = contextTransaction;    

    return (
      <div>
        
          <Pie 
              data = {{
                  labels: [
                    'LightGreen',
                    'Blue',
                    'Yellow'
                  ],
                  datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                      'LightGreen',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                  }],
              }}
              height={350}
              width={350}
              options={{
                maintainAspectRatio: false
              }}
              
          />
      </div>
      // :
      // <div>
      //   No expenses available to be displayed as charts
      // </div>
  )
}

export { Visual }
