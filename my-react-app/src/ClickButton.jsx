/*
click event = An interavtion when a user clicks on a specific element.
We can respond to clicks by passing a callback to the onClick event handler.

Example 1:
*/

function ClickButton(){

    const handleClick = (e) => e.target.textContent = "NHAI🫨";

    return(<button onClick={(e) => handleClick(e)}>Click Me😁</button>);
}

export default ClickButton