import React from 'react';
import './Course.css';
import Index from "../../Fakadata/index";
import Cart from '../Cart/Cart';
import {useState} from 'react';


const Course = () => {

    const first15 = Index.slice(0,15);
    //const [Items, setItems] = UseState(first15)


    const [cart, setCart] = useState([])

    const handleEnrolled = (course)=> {
        const newCart = [...cart, course];
        setCart(newCart)
    }
    
    const result = cart.reduce((total,setTotal) => total+ Number(setTotal.price),0)

    return (
        <div>
            <div className="text-center">
                <h3>Your Cart</h3> <hr/>
                <h4 >Course Added: {cart.length} </h4>
                <h4>Total Price: ${result.toFixed(2)}</h4>
            </div>
            {
                first15.map((data) =><Cart key = {data.id} courseItem={data} handleEnrolled = {handleEnrolled}></Cart>)
            }
            
        </div>
    );
};

export default Course;