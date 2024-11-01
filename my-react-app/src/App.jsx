import Card from './Card.jsx';
import Student from './Student.jsx'
import Button from './Button.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx'

function App(){

  const fruits = [{id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3, name: "banana", calories: 105}, 
    {id: 4, name: "coconut", calories: 159}, 
    {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 1, name: "potatoes", calories: 110}, 
    {id: 2, name: "celery", calories: 15}, 
    {id: 3, name: "carrots", calories: 25}, 
    {id: 4, name: "corn", calories: 63}, 
    {id: 5, name: "broccoli", calories: 50}];

  return(
    <>
        <UserGreeting isLoggedIn={true} username="Vivian"/>
        <Card /><br></br>
        <Button /><br></br><br></br>
        <Student name="Vivian" age={19} isStudent={true}/>
        <Student name="Leo" age="15" isStudent={true}/>
        <Student /><br></br>
        {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>    
  );
}

export default App
