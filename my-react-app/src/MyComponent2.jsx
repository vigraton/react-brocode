/*
onChange = event handler used primalily with form
elements ex. <input>, <textarea>, <select>, <radio>
Triggers a function every time the value of the 
input changes.
*/

import React, {useState} from 'react'

function MyComponent2(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p><br></br>

        <input value={quantity} onChange={handleQuantityChange}></input>
        <p>Quantity: {quantity}</p><br></br>

        <textarea value={comment} placeholder="Enter delivery instructions" 
        onChange={handleCommentChange}/>
        <p>Comment: {comment}</p><br></br>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Selection an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick up" checked={shipping === "Pick up"} 
            onChange={handleShippingChange}></input>
            Pick up
        </label>
        <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"}
            onChange={handleShippingChange}></input>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
    );
}

export default MyComponent2