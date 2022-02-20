import { Form, Button } from "react-bootstrap";
import { useRef, useState, useContext } from "react";
import { Formik } from "formik";
import CustomFormField from "./CustomFormField";
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid*')
      .required('Email is required*'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters*')
      .required('Password is required*'),
  });

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    // extract data from refs
    const enteredEmail = emailRef.current.value;
    const enteretPasword = passwordRef.current.value;

    fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCapFBRjQG6PixiuAj_gpitXYd_wgcnmbE',
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
    ).then((response) => {
        if (response.ok) {
          // if the response is ok
          return response.json()
        } else {
          // if we get an error
          return response.json().then(data => {
            const errorMessage = 'Authentication failed!';
            throw new Error(errorMessage);
          });
        }
    })
    .then(data => {
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace('/');
    })
    .catch(err => {
      alert(err.message)
    });
}

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validate}
    >
      {formik => (
        <Form onSubmit={submitHandler}>
          <CustomFormField controlid='floatingEmail' name='email' label='Email address' type='email' ref={emailRef}  />
          <CustomFormField controlid='floatingPassword' name='password' label='Password' type='password' ref={passwordRef}  />
          <Button disabled={loading} className="button-second mt-5" type="submit">Log In</Button>
        </Form>
      )}
    </Formik>
  );
};
