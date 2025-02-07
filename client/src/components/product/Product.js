import React from "react";
import "./Product.scss"
import {useNavigate} from "react-router-dom";
 const Product = ({product}) => {

    const navigate = useNavigate();
     console.log('Product:', product)
    console.log('Product:', product.attributes.key);
    return (
        <div className="Product" onClick={()=>navigate(`/products/${product?.attributes.key}`)}>
            <div className="product-container">
                <div className="product-img">
                    <div className="img-container">
                        <img id="img" src={product?.attributes.Image?.data.attributes.url} alt={product?.attributes.title}/>
                    </div>
                </div>
                <div className="product-info">
                    <p className="title">
                        {product?.attributes.Title}
                    </p>
                    <p className="price">
                        ₹{product?.attributes.Price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;

