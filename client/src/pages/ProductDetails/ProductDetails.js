import React, {useCallback, useEffect, useState} from 'react';
import './ProductDetails.scss'
import {useParams} from "react-router-dom";
import {axiosClient} from "../../utils/axiosClient";
import LoadingBar from "../../components/loadingBar/LoadingBar";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../../redux/cartSlice";

function ProductDetails() {

    const params = useParams();
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();
    console.log('Product Id:', params.productId);

    const cart = useSelector(state => state.cartReducer.cart);
    const quantity = cart.find(item => item.key === params.productId)?.quantity || 0;


    const fetchData = useCallback(async () => {
        try {
            const productResponse = await axiosClient.get(
                `/products?filters[key][$eq]=${params.productId}&populate=*`
            );
            if (productResponse.data.data.length > 0) {
                setProduct(productResponse.data.data[0]);
            }
            console.log('Product:', productResponse.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }, [params]);
    useEffect(() => {
        fetchData().then();
    }, [params]);

    if (!product) {
        return <LoadingBar/>
    }


    return (
        <div className="ProductDetail">
            <div className="container">
                <div className="product-layout">
                    <div className="product-img ">
                        <img src={product?.attributes?.Image.data.attributes.url} alt={product?.attributes?.Title}/>
                    </div>
                    <div className="product-info">
                        <h1 className="heading">
                            {product?.attributes?.Title}
                        </h1>
                        <h3 className="price">
                            ₹{product?.attributes?.Price}
                        </h3>
                        <p className="description">
                            {product?.attributes?.Description}
                        </p>
                        <div className="cart-option">
                            <div className="quantity-selector">
                               <span className="btn decrement" onClick={() => dispatch(removeFromCart(product.attributes))}>-</span>
                                <span className="quantity">{quantity}</span>
                                <span className="btn increment" onClick={()=>dispatch(addToCart(product))}>+</span>
                            </div>
                            <button className="btn-primary add-to-cart" onClick={()=>dispatch(addToCart(product))}>
                                Add to Cart
                            </button>
                            <div className="return-policy">
                                <ul>
                                    <li>
                                        Since this product is printed on demand
                                        especially for you, it is not eligible for
                                        cancellations and returns. Read our Return
                                        Policy.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;