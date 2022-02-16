import { Form, Button } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext';
import { useRef, useState } from "react";
import { Formik } from "formik";
import CustomFormField from "./CustomFormField";
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account.");
    }
    setLoading(false);
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
        <Form onSubmit={handleSubmit}>
          <CustomFormField controlId='floatingEmail' name='email' label='Email address' type='email' ref={emailRef}  />
          <CustomFormField controlId='floatingPassword' name='password' label='Password' type='password' ref={passwordRef}  />
          
          <div className="form-field newsletter">
            <div className="terms">
              <span className="tc">
                <a href="#">Forgot your password?</a>
                <NavLink to='/register/login' btnName='Have an account?'/>
              </span>
            </div>
          </div>
          <Button disabled={loading} className="button-second mt-5" type="submit">Log In</Button>
        </Form>
      )}
    </Formik>
  );
};
