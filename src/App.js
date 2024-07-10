import './App.css';
import Subscription from './subscription/Subscription';
import Container from './templets/Container';
import NewSubscription from './subscription/NewSubscription/NewSubscription';


function App() {
  let subscriptions = [
    {
      id: "1",
      date: (new Date('2024','7','6')),
      title: "Monthly Subscription",
      amount: "150"
    },
    {
      id: "2",
      date: (new Date('2023','1','3')),
      title: "Annual Subscription",
      amount: "1500"
    },{
      id: "3",
      date: (new Date('2020','12','10')),
      title: "Quaterly Subscription",
      amount: "600"
    }
  ]

  const addSubscriptionHandler = (data) => {
    subscriptions.push(data);
    console.log("On Add",data);
  }

  return (
    <Container>
      <NewSubscription onAddSubscription={addSubscriptionHandler} />
      <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
      <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
      <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>
    </Container>
  );
}

export default App;
