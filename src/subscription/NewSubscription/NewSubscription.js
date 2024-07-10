import './NewSubscription.css';
import FormSubscription from './FormSubscription';

//Arrow function
const NewSubscription = (props) => {

    const onSaveHandler = (data) => {
        const subscriptionData = {...data,id:Math.random().toString()};
        props.onAddSubscription(subscriptionData);
        console.log("On Save",subscriptionData);
    }

    return (
        <div className="new_subscription">
            <FormSubscription onSave={onSaveHandler}/>
        </div>
    )
}
export default NewSubscription