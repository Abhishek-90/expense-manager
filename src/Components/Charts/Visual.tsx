import React, { useContext } from 'react'

import 'chart.js/auto'
import { Pie } from 'react-chartjs-2';
import { transactionContext } from '../../context/transactionContext'

const Visual = () => {
    const contextTransaction:any = useContext(transactionContext);
    const { userStatement } = contextTransaction;   
    
    const expenseData = userStatement.filter((e:any) => e.type === 'expense');
    const labels = [...new Set(expenseData.map((e:any) => e.tag))]

    let data:number[] = [];

    for (let i = 0; i < labels.length; i++) {
      const temp = expenseData.map((e:any) =>{ 
        if(e.tag === labels[i])
         return e.amount;
        else
          return 0;
      });
      // console.log(temp);
      let s = 0;
      
      temp.forEach((element:any) => {
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
                      '#f1c893',
                      'Grey',
                      'LightGreen',
                      'LightBlue',
                      'Pink',
                      '#f1d085',
                      '#027c7c'
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
