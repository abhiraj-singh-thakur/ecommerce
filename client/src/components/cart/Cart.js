import React from "react";
import "./Cart.scss";
import {AiOutlineClose} from "react-icons/ai";
import CartItems from "../cartItems/CartItems";
import {useSelector} from "react-redux";
import {BsCartX} from "react-icons/bs";
import {axiosClient} from "../../utils/axiosClient";
import {loadStripe} from '@stripe/stripe-js';


function Cart({onClose}) {
    const cart = useSelector(state => state.cartReducer.cart);
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
    })
    const isEmpty = cart.length === 0;

    async function handleCheckout() {
        try {
            const response = await axiosClient.post('/orders', {
                products: cart
            });
            const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`);
            const data = await stripe.redirectToCheckout({
                sessionId: response.data.stripeId,
            });
            console.log('data', data)
            console.log('response', response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="Cart">
            <div className="overlay" onClick={onClose}></div>
            <div className="cart-content">
                <div className="header">
                    <p className="shopping-cart">Shopping Cart</p>
                    <div className="close-btn" onClick={onClose}>
                        <AiOutlineClose/> close
                    </div>
                </div>
                {!isEmpty ? (
                    <>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <CartItems key={item.key} cart={item}/>
                            ))}
                        </div>
                        <div className="checkout-info">
                            <div className="total-amount-heading">
                                <h3 className="total-amount">Total Amount</h3>
                                <p className="amount">₹ {totalAmount}</p>
                            </div>
                            <button className="checkout-btn btn-primary" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </>
                ) : (
                    <div className="empty-cart">
                        <BsCartX size={100}/>
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Cart;
