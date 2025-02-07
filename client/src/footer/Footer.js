import React from "react" ;
import './Footer.scss'
import {BsFacebook, BsInstagram, BsTwitterX, BsYoutube} from "react-icons/bs";

function Footer() {
    const size = 25;
    return (<footer className="Footer">
        <div className="container">
            <div className="content">
                <div className="footer-left">
                    <h3 className="title">Follow us</h3>
                    <ul className="follow">
                        <li className="hover-link"><BsFacebook size={`${size}`}/></li>
                        <li className="hover-link"><BsInstagram size={`${size}`}/></li>
                        <li className="hover-link"><BsYoutube size={`${size}`}/></li>
                        <li className="hover-link"><BsTwitterX size={`${size}`}/></li>

                    </ul>
                </div>
                <div className="footer-right">
                    <h3 className="title">iShops</h3>
                    <ul className="company">
                        <li className="hover-link">Contact Us</li>
                        <li className="hover-link">Privacy Policy</li>
                        <li className="hover-link">Return and Exchange Policy</li>
                        <li className="hover-link">Terms & Condition</li>
                    </ul>
                </div>
            </div>
            <div className="sub-footer center">
                <div className="credit-card-img">
                    <p className="payment-info">Accepted Payments</p>
                    <ul className="payments">
                        <li><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPusLV2Q_HvhMBli532nv6KYP2k74EQ8vydhL2yG22k4pXnMyLPo8GG_o4lm2soNqHUQ&usqp=CAU"
                            alt=""/>
                        </li>
                        <li><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwyr6fYFCRFh-Og7bqDAcbHDGMDNWRgEZrjdzdNP1LunUOe5rJE5bSNYpiHRWeosOaxY&usqp=CAU"
                            alt=""/>
                        </li>
                        <li><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAiqHmZyegX8kbUBtASjOqzhaVekhVyZp7dJijY8-kMwZFxxk3eMpSzv-1No_nmdoAVE&usqp=CAU"
                            alt=""/>
                        </li>
                        <li>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDwORokMfTBUd90jD0uxLjmDhkWis0ScqGUv4bwe9nro7DY-eMw6B50bdApwc6fTjv8g&usqp=CAU"
                                alt=""/>
                        </li>
                    </ul>
                </div>
                <p style={{marginTop: '20px', fontSize: '15px'}}>
                    Copywrite {new Date().getFullYear()} © <strong>iShops</strong>
                </p>
            </div>
        </div>
    </footer>);
}

export default Footer;