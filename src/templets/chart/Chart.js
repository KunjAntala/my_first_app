import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'


const Chart = (props) => {

  const dataSetValues = props.dataset.map(dataSet => dataSet.value)
  const max = Math.max(...dataSetValues)
console.log(max);
  return (
    <div className='chart'>
        {props.dataset.map((data) => { 
         return <ChartBar value={data.value} 
        label={data.label} key={data.label} maxValue={max} /> })}
    </div>
  )
}

export default Chart
