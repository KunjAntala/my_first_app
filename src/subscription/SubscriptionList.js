import './SubscriptionList.css'
import React from 'react'
import Subscription from './Subscription';

function SubscriptionList(props) {

    if (props.subscriptions.length == 0) {
        return <h2 className='list_nodata'>No Data Fount</h2>
    }
    return (
        <ul className='list'>
            {props.subscriptions.map((subscription, index) =>
            <Subscription key={subscription.id} date={subscription.date}
            title={subscription.title} amount={subscription.amount} />)}
        </ul>
    )
}

export default SubscriptionList
