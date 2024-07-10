import './SubscriptionDate.css'

function SubscriptionDate(props) {

    const day = props.date.toLocaleString('default', { day: '2-digit' });
    const month = props.date.toLocaleString('default', { month: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div>
            <div className="subscription-date">{day}-</div>
            <div className="subscription-date">{month}-</div>
            <div className="subscription-date">{year}</div>
        </div>
    )
}
export default SubscriptionDate