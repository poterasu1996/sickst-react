import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import img1 from "../assets/img/clive-christian-hedonistic-jump-up-and-kiss-me.jpg"
import star from "../assets/img/svg/star.svg"
import AccountDetails from "../components/auth/AccountDetails";
import AuthContext from '../store/auth-context';

const Account = () => {
    const history = useHistory();
    const [error, setError] = useState("");

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <>
            {!isLoggedIn && history.replace("/register/login")}

            <div className="main-body account-page">
                <div className="container account-content">
                    <div className="row">
                        <div className="col-10 title">
                            <span>Bine ai venit, NumeUser</span>
                        </div>
                        <div className="row details">
                            <div className="col-7 orders">
                                <div className="user-orders">
                                    <div className="row"></div>
                                    <div className="row last-order">
                                        <div className="col-4 card">
                                            <div className="title">
                                                <span className="title">Septembrie</span>
                                            </div>
                                            <div className="product-img"><img src={img1} alt="product image"></img></div>
                                            <div className="product-description">
                                                <span className="product-name">Dior</span>
                                                <div className="product-rating">
                                                    <div className="five-stars">
                                                        <img src={star}></img>
                                                        <img src={star}></img>
                                                        <img src={star}></img>
                                                        <img src={star}></img>
                                                        <img src={star}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col last-order-details"></div>
                                    </div>
                                    <div className="row"></div>
                                    <div className="row last-order"></div>
                                </div>
                            </div>
                            <div className="col-4 user-details">
                                <div className="col subtitle"><span>Informatii suplimentare</span></div>
                                <div className="col user-form">
                                    <div className="form">
                                        <AccountDetails/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 copyright"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;