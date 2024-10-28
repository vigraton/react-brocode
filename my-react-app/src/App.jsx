import Card from './Card.jsx';
import Student from './Student.jsx'
import Button from './Button.jsx';

function App(){
  return(
    <>
        <Card /><br></br>
        <Button />
        <Student  name="Vivian" age="19" isStudent={true}/>
    </>    
  );
}

export default App
