import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpForm,
  LabelCheckbox,
  Input,
  Button,
  InputContainer,
  ISpan,
} from "../../styles/styles";
import { useFormik } from "formik";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";

const SignUp = ({ setIsLogged }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setIsLogged(true);
      navigate("/");
    },
  });

  return (
    <SignUpForm onSubmit={formik.handleSubmit}>
      <h1>Sign Up</h1>
      <InputContainer>
        <ISpan>
          <PersonIcon />
        </ISpan>
        <Input
          type="text"
          required
          placeholder="Username"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </InputContainer>
      <InputContainer>
        <ISpan>
          <PasswordIcon />
        </ISpan>
        <Input
          type="password"
          required
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </InputContainer>
      <InputContainer>
        <ISpan>
          <EmailIcon />
        </ISpan>
        <Input
          type="email"
          required
          placeholder="E-mail"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </InputContainer>
      <LabelCheckbox>
        <input type="checkbox" required /> I read and agree to the Terms and
        Conditions
      </LabelCheckbox>
      <Button>Create Account</Button>
    </SignUpForm>
  );
};

export default SignUp;
