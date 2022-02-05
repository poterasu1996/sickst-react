import { Fragment } from "react";
import SimpleHeader from "../components/header/SimpleHeader";

import maleIcon from "../assets/img/male-icon.png"
import femaleIcon from "../assets/img/female-icon.jpg"

import { FloatingLabel, Form } from "react-bootstrap";
import SecondaryButton from "../components/general-components/SecondaryButton";

const Register = () => {
    return <Fragment>
        <SimpleHeader />
        <div className="main-content">
            <div className="main-body">
                <div className="container register-page">
                    <div className="row">
                        <div className="col-5 title">
                            <span>Creeaza contul</span>
                        </div>
                        <div className="col-5 subtitle">
                            <span>Selecteaza sexul</span>
                        </div>
                        <div className="col-5 gender-icons">
                            <div className="female">
                                <a href="#">
                                    <img src={femaleIcon}></img>
                                    <span>Female</span>
                                </a>
                            </div>
                            <div className="male">
                                <a href="#">
                                    <img src={maleIcon}></img>
                                    <span>Male</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="form">
                                <form action="#">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="form-field"
                                    >
                                        <Form.Control type="email" placeholder="Email address" />
                                    </FloatingLabel>
                                    <FloatingLabel 
                                        controlId="floatingPassword" 
                                        label="Password"
                                        className="form-field"
                                    >
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                    <div className="form-field newsletter">
                                        <label className="check-box">
                                            <input className="cb" type="checkbox"></input>
                                            <span className="custom-cb"></span>
                                            <span className="text">Sign me up for details from Sickst</span>
                                        </label>
                                        <div className="terms">
                                            <span className="title">By hitting the "Sign up" button, you agree to the</span>
                                            <span className="tc">
                                                <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
                                            </span>
                                        </div>
                                    </div>
                                    <SecondaryButton btnName={'Sign up'} type="submit" size="" to={'/'}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Register;