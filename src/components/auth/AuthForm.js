import { Formik } from 'formik';
import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CustomFormField from './CustomFormField';
import * as Yup from 'yup';

const AuthForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const validate = Yup.object({
        email: Yup.string()
          .email('Email is invalid*')
          .required('Email is required*'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters*')
          .required('Password is required*'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match*')
          .required('Confirm password*'),
      });


    const [isLogin, setIsLogin] = useState(true);
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    // form submission
    const submitHandler = (event) => {
        event.preventDefault();

        // extract data from refs
        const enteredEmail = emailRef.current.value;
        const enteretPasword = passwordRef.current.value;

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCapFBRjQG6PixiuAj_gpitXYd_wgcnmbE',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteretPasword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            if (response.ok) {
                // if the response is ok
            } else {
                // if we get an error
                return response.json().then(data => {
                    console.log(data);
                })
            }
        });
    }

    return (
        <Formik
        initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
        }}
        validationSchema={validate}
        >
        {formik => (
            <Form onSubmit={submitHandler}>
            <CustomFormField controlid='floatingEmail' name='email' label='Email address' type='email' ref={emailRef}  />
            <CustomFormField controlid='floatingPassword' name='password' label='Password' type='password' ref={passwordRef}  />
            <CustomFormField controlid='floatingPasswordConfirm' name='confirmPassword' label='Password confirmation' type='password' ref={passwordConfirmRef}  />
            
            <div className="form-field newsletter">
                <label className="check-box">
                <input className="cb" type="checkbox"></input>
                <span className="custom-cb"></span>
                <span className="text">Sign me up for details from Sickst</span>
                </label>
                <div className="terms">
                <span className="title">
                    By hitting the "Sign up" button, you agree to the
                </span>
                <span className="tc">
                    <a href="#">Terms and Conditions</a> and{" "}
                    <a href="#">Privacy Policy</a>
                </span>
                </div>
            </div>
            <Button className="button-second mt-5" type="submit">Sign up</Button>
            </Form>
        )}
        </Formik>
    );
};

export default AuthForm;