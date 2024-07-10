import './Subscription.css'
import Container from '../templets/Container'
import SubscriptionDate from './SubscriptionDate'
import react,{useState} from 'react';

function Subscription(props){

    const [title,setTitle] = useState(props.title)
    const onClickHandler = () => {
        setTitle("Change Title")
        console.log(title)
    }

    return (
        <Container className="subscription">
            <SubscriptionDate date={props.date}/>
            <h2 className="subscription-title">{title}</h2>
            <div className="subscription-price">{props.amount}</div>
            <button className="change-title" type="button" id="chageTitleButton" onClick={onClickHandler}>Change Title</button>
        </Container>
    )
}
export default Subscription