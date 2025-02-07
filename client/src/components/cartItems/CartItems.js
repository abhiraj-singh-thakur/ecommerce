import React from "react";
import "./CartItem.scss";
import img from "../../assets/luffy.jpeg"
import {AiOutlineClose} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart, resetCart} from "../../redux/cartSlice";

function CartItems({cart}) {
    console.log("Cart", cart);
    console.log("Cart", cart.quantity);
    const dispatch = useDispatch();

    return (
         <div className="CartItem">
            <div className="item-img">
                <img src={cart.image} alt="" />
            </div>
            <div className="item-info-wrapper">
                <div className="item-info">
                    <p className="title">{cart.title}</p>
                    <p className="price">₹ {cart.price}</p>
                    <div className="quantity-selector">
                        <span className="btn decrement" onClick={() => dispatch(removeFromCart(cart))}>-</span>
                        <span className="quantity">{cart.quantity}</span>
                 <span className="btn increment" onClick={() => dispatch(addToCart(cart))}>+</span>
                    </div>
                    <p className="total-price">Subtotal: ₹ {cart.price * cart.quantity}</p>
                </div>
                {/* <div className="item-remove" onClick={()=>dispatch(resetCart)}>
                    <AiOutlineClose />
                </div> */}
            </div>
        </div>
    )
}

export default CartItems;