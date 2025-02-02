import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {

    let barHeight = '0%'
    if (props.maxValue > 0) {
        barHeight = Math.round((props.value / props.maxValue)* 100) + '%'
    }
    
    return (
        <div className='chart-bar'>
        <div className='cb-inner'>
            <div className='cb-fill' style={{'height': barHeight}}></div>
        </div>
        <div className='cb-label'>{props.label}</div>
        </div>
    )
}

export default ChartBar
