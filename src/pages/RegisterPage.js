import { Fragment } from "react";
import SimpleHeader from "../components/header/SimpleHeader";

import NavLink from "../components/header/NavLink";
import maleIcon from "../assets/img/male-icon.png"
import femaleIcon from "../assets/img/female-icon.jpg"
import AuthForm from "../components/auth/AuthForm";

const RegisterPage = () => {
    return <>
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
                                <AuthForm />
                            </div>
                        </div>
                        <div className="col-5 login">
                            <span className="login-link">
                                Have an account? <NavLink to='/register/login' btnName='Log in'/>
                            </span>
                            <div className="split">
                                <span className="line"></span>
                                <span className="text">or</span>
                                <span className="line"></span>
                            </div>
                            <div className="fb-signup">
                                <h1>Facebook</h1>
                                <h1>Google</h1>
                            </div>
                        </div>
                        <div className="col-5 copyright">
                            <span>&copy; Sickst</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RegisterPage;