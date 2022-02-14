import { Form, Alert, Button } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext';
import { useRef, useState } from "react";
import { Formik } from "formik";
import CustomFormField from "./CustomFormField";
import * as Yup from 'yup';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
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
    console.log(passwordRef)
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords must match!");
    }

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
          <CustomFormField controlId='floatingPasswordConfirm' name='confirmPassword' label='Password confirmation' type='password' ref={passwordConfirmRef}  />
          
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
          <Button disabled={loading} className="button-second mt-5" type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};
