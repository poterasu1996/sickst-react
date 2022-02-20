import { NavLink } from "react-router-dom";
import Login from "../components/auth/Login";
import SimpleHeader from "../components/header/SimpleHeader";

const LoginPage = () => {
    return <>
        <SimpleHeader />
        <div className="main-content">
            <div className="main-body">
                <div className="container register-page">
                    <div className="row">
                        <div className="col-5 title">
                            <span>Log in to your account</span>
                        </div>
                        <div className="col-5">
                            <div className="form">
                                <Login />
                            </div>
                        </div>
                        <div className="col-5 login">
                            <div className="login-link">
                                <a href="#">Forgot your password?</a>
                                <a href="#">Don't have an account?</a>
                            </div>
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

export default LoginPage;