import React from 'react'
import './SubscriptionChart.css'
import Chart from './Chart';

const SubscriptionChart = (props) => {

    const chartData = [
        {'label':'Jan',value:0,maxValue:1000},
        {'label':'Feb',value:0,maxValue:1000},
        {'label':'Mar',value:0,maxValue:1000},
        {'label':'Apr',value:0,maxValue:1000},
        {'label':'May',value:0,maxValue:1000},
        {'label':'Jun',value:0,maxValue:1000},
        {'label':'Jul',value:0,maxValue:1000},
        {'label':'Aug',value:0,maxValue:1000},
        {'label':'Sep',value:0,maxValue:1000},
        {'label':'Oct',value:0,maxValue:1000},
        {'label':'Nov',value:0,maxValue:1000},
        {'label':'Dec',value:0,maxValue:1000},
    ];


    for (const subscription of props.filteredSubscriptons){
        const label = subscription.date.getMonth();
        chartData[label].value += Number(subscription.amount)
    }
    return (
        <Chart dataset = {chartData} />
    )
}

export default SubscriptionChart
