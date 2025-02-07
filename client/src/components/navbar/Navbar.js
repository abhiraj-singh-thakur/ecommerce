import React, {useState} from 'react';
import './Navbar.scss';
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import Cart from "../cart/Cart";
import cart from "../cart/Cart";
import {useSelector} from "react-redux";

function Navbar() {
    const [openCart, setOpenCart] = useState(false)

    const categories = useSelector(state => state.categoryReducer.categories);
    console.log('Categories:', categories);
    const cart = useSelector(state => state.cartReducer.cart);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);


    return (
        <>
            <nav className="Navbar">
                <div className="container nav-container">
                    <div className="nav-left">
                        <ul className='link-group'>
                            {categories?.map((category) => (
                                <li key={category.id} className="hover-link">
                                    <Link className='link'
                                          to={`/category/${category.attributes.key}`}>{category.attributes.Title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-center">
                        <Link to='/'>
                            <h1>iShops</h1>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <div className="cart-container hover-link" onClick={() => setOpenCart(!openCart)}>
                            <FaShoppingCart className="cart-icon"/>
                            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                        </div>
                    </div>
                </div>
            </nav>
            {
                openCart && <Cart onClose={() => setOpenCart(false)}/>
            }
        </>
    )
}

export default Navbar;