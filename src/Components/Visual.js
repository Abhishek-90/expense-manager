import React from 'react'

import 'chart.js/auto'
import { Pie } from 'react-chartjs-2';

const Visual = () => {
    return (
        <div>
            <Pie 
                data = {{
                    labels: [
                      'Red',
                      'Blue',
                      'Yellow'
                    ],
                    datasets: [{
                      label: 'My First Dataset',
                      data: [300, 50, 100],
                      backgroundColor: [
                        'rgb(255, 99, 132)',
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
    )   
}

export { Visual }
