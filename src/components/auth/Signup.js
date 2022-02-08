import { FloatingLabel, Form, Alert, Button } from "react-bootstrap";
import SecondaryButton from "../general-components/SecondaryButton";
import { useAuth } from '../../contexts/AuthContext';
import { Fragment, useRef, useState } from "react";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
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
    <Fragment>
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="form-field"
        >
          <Form.Control
            type="email"
            placeholder="Email address"
            ref={emailRef}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="form-field"
          >
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPasswordConfirmation"
          label="Password confirmation"
          className="form-field"
          >
          <Form.Control
            type="password"
            placeholder="Password "
            ref={passwordConfirmRef}
            required
          />
        </FloatingLabel>

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
        {/* <SecondaryButton
          btnName={"Sign up"}
          type="submit"
          size=""
          to={"/"}
          disabled={loading}
        /> */}
        <Button disabled={loading} className="button-second mt-5" type="submit">Sign up</Button>
      </Form>
    </Fragment>
  );
};
