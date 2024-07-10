import './FormSubscription.css';
import {useState} from 'react';

//Arrow function
const FormSubscription = (props) => {

    // const [userTitle,setUserTitle] = useState();
    // const [userDate,setUserDate] = useState();
    // const [userAmount,setUserAmount] = useState();  

    const [form,setForm] = useState({userTitle:'Enter Title', userDate:'', userAmount:'Enter Amount'})
    const titlechange = (events) => {
        // setUserTitle(events.target.value);
        // setForm({...form,userTitle:events.target.value});
        setForm((prevState) => {
            return {...prevState,userTitle:events.target.value}
        })
        console.log(form);
    }

    const datechange = (events) => {
        // setUserDate(events.target.value);
        // setForm({...form,userDate:events.target.value});
        setForm((prevState) => {
            return {...prevState,userDate:events.target.value}
        })
        console.log(form);
    }

    const amountchange = (events) => {
        // setUserAmount(events.target.value);
        // setForm({...form,userAmount:events.target.value});
        setForm((prevState) => {
            return {...prevState,userAmount:events.target.value}
        })
        console.log(form);
    }

    const submit = (events) => {
        events.preventDefault();
        const Subscription = {title:form.userTitle,date:form.userDate,amount:form.userAmount}
        props.onSave(Subscription);
        console.log("On Submit",Subscription);
    }
    return (
        <form onSubmit={submit}>
            <div className="controls">
                <div className="controls">
                    <label>Title</label>
                    <input type="text" onChange={titlechange} value={form.userTitle}></input>
                </div>
                <div className="controls">
                    <label>Date</label>
                    <input type="date" onChange={datechange} value={form.userDate}></input>
                </div>
                <div className="controls">
                    <label>Amount</label>
                    <input type="text" min="10" onChange={amountchange} value={form.userAmount}></input>
                </div>
            </div>
            <div>
                <div className="action">
                    <button type="submit">Add Subscription</button>
                </div>
            </div>
        </form>
    )
}
export default FormSubscription