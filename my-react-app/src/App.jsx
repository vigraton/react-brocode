import { Link } from 'react-router-dom';
import React from 'react';
import AppRoutes from './rotas/routes.jsx';

import Card from './components/Card.jsx';
import Student from './components/Student.jsx';
import Button from './components/Button.jsx';
import UserGreeting from './components/UserGreeting.jsx';
import List from './components/List.jsx';
import ClickButton from './components/ClickButton.jsx';
import ProfilePicture from './components/ProfilePicture.jsx';
import MyComponent from './components/MyComponent.jsx';
import MyComponent2 from './components/MyComponent2.jsx'
import FunctionUpDate from './components/FunctionUpDate.jsx';
import MyObj from './components/MyObj.jsx'
import UpdateArrayinState from './components/UpdateArrayinState.jsx';
import UpdateArrayinObj from './components/UpdateArrayinObj.jsx';
import UseEffect from './components/UseEffect.jsx';
import ComponentA from './components/ComponentA.jsx';
import UseRef from './components/UseRef.jsx';


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
        <AppRoutes/>
        <h3>Projetos:</h3><br></br>
        <Link to="color-picker"></Link>

        {/*<UserGreeting isLoggedIn={true} username="Vivian"/>
        <Card /><br></br>
        <Button /><br></br><br></br>
        <Student name="Vivian" age={19} isStudent={true}/>
        <Student name="Leo" age={15} isStudent={true}/>
        <Student /><br></br>
        {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
        <ClickButton /><br></br><br></br>
        <ProfilePicture /><br></br><br></br>
        <MyComponent /><br></br>
        <MyComponent2 /><br></br>
        <FunctionUpDate /><br></br>*/}
        {/* <MyObj /><br></br>
        <UpdateArrayinState />
        <UpdateArrayinObj /><br></br>
        <UseEffect /><br></br>
        <ComponentA /><br></br><br></br>
        <UseRef /> */}
    </>    
  );
}

export default App
