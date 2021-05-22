import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce((total, prd) => total + prd.price , 0)
    
    let total = 0;
    for(let i = 0; i < cart.length ; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax =(total/10).toFixed(2);

    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    return ( 
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered:{cart.length}</p>
            <p><small>Items:${total.toFixed(2)} </small></p>
            <p><small>Shipping & Handling:${shipping}</small></p>
            <p><small>Total: ${grandTotal} </small></p>
            <p><small>Estimated Tax: ${tax}</small></p>
        </div>
    );
};

export default Cart;