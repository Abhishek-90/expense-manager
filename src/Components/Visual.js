import React, { useContext } from 'react'

import 'chart.js/auto'
import { Pie } from 'react-chartjs-2';
import { transactionContext } from '../context/transactionContext'

const Visual = () => {
    const contextTransaction = useContext(transactionContext);
    const { userStatement } = contextTransaction;   
    
    const expenseData = userStatement.filter(e => e.type === 'expense');
    const labels = [... new Set(expenseData.map(e => e.tag))]

    let data = [];

    for (let i = 0; i < labels.length; i++) {
      const temp = expenseData.map(e =>{ 
        if(e.tag === labels[i])
         return e.amount;
        else
          return 0;
      });
      // console.log(temp);
      let s = 0;
      
      temp.forEach(element => {
        s = s + parseInt(element);
      });

      // console.log(s);
      data.push(s);
    }
    // console.log(data);

    return (
      <div>
        
          <Pie 
              data = {{
                  labels: labels,
                  datasets: [{
                    data: data,
                    backgroundColor: [
                      'LightGreen',
                      'Pink',
                      'LightBlue',
                      'Yellow'
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
