import './Payments.scss'
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {BsFillCartCheckFill} from "react-icons/bs";
import {BiErrorCircle} from "react-icons/bi";
import {useDispatch} from "react-redux";
import {resetCart} from "../../redux/cartSlice";

function Payments() {
    const params = useParams();
    const status = params.status;
    const dispatch = useDispatch();

    const info = {
        "success": {
            message: "Payment Successful",
            cta: "Go to Home",
            icon: <BsFillCartCheckFill/>
        },
        "failed": {
            message: "Payment Failed",
            cta: "Try Again",
            icon: <BiErrorCircle/>
        }
    }

    if (status === 'success') {
        dispatch(resetCart());
    }

    return (
        <div className="Payments">
            <div className="icon">
                {info[status].icon}
            </div>
            <button className="btn-primary" onClick={useNavigate('/')}>
                {info[status].cta}
            </button>
        </div>
    )
}

export default Payments