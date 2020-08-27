import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { tittle, image, description, price } = props.courseItem;
    const handleEnrolled = props.handleEnrolled
    return (
        <div className="card-Items p-3 float-left d-flex justify-contain-between ml-4 mb-4">
            <div className="card per-cart ">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {tittle} </h5>
                    <small className="card-text">{description}</small>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div>
                        <p className="taka">${price}</p>
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={()=> handleEnrolled(props.courseItem)} > Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;