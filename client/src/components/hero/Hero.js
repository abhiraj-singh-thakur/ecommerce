import React from "react";
import "./Hero.scss";
import {useNavigate} from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="Hero">
            <div className="hero-content center">
                <h2 className="heading">
                    Welcome to iShops
                </h2>
                <p className="sub-heading">
                    The best place to buy your favorite items
                </p>
                <button className="btn btn-primary" onClick={() => navigate('/category')}>
                    Shop Now
                </button>
            </div>
        </div>
    )
}

export default Hero;