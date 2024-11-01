import Card from './Card.jsx';
import Student from './Student.jsx'
import Button from './Button.jsx'
import UserGreeting from './UserGreeting.jsx';

function App(){
  return(
    <>
        <UserGreeting isLoggedIn={true} username="Vivian"/>
        <Card /><br></br>
        <Button /><br></br><br></br>
        <Student name="Vivian" age={19} isStudent={true}/>
        <Student name="Leo" age="15" isStudent={true}/>
        <Student />

    </>    
  );
}

export default App
