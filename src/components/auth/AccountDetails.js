import { Form } from "react-bootstrap";
import { useContext, useRef, useState } from "react";
import { Formik } from "formik";
import CustomFormField from "./CustomFormField";
import * as Yup from 'yup';
import SecondaryBtnEmpty from "../general-components/SecondaryBtnEmpty";
import SecondaryButton from "../general-components/SecondaryButton";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

export default function AccountDetails(props) {
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const birthdateRef = useRef();
    const addressRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const validate = Yup.object({
      email: Yup.string()
        .email('Email is invalid*'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters*'),
    });

    const logoutHandler = () => {
      authCtx.logout();
      history.replace('/');
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
          <Form>
            <CustomFormField controlid='floatingFirstname' name='firstname' label='First name' type='text' ref={firstnameRef}  />
            <CustomFormField controlid='floatingLastname' name='lastname' label='Last name' type='text' ref={lastnameRef}  />
            <CustomFormField controlid='floatingBirthdate' name='birthdate' label='Data nasterii' type='date' ref={birthdateRef}  />
            <CustomFormField controlid='floatingAddress' name='address' label='Adresa' type='text' ref={addressRef}  />
            <div className="btn-wrapper">
                <SecondaryBtnEmpty className="mt-5" btnname="Log out" onClick={logoutHandler}/>
                <SecondaryButton btnname="Actualizeaza"/>
            </div>
          </Form>
        )}
      </Formik>
    );
};
