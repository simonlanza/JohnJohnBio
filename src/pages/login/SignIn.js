import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpForm,
  Input,
  Button,
  InputContainer,
  ISpan,
} from "../../styles/styles";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";

const SignIn = ({ setIsLogged }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
    navigate("/");
  };
  return (
    <SignUpForm onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <InputContainer>
        <ISpan>
          <PersonIcon />
        </ISpan>
        <Input type="text" required placeholder="Username" />
      </InputContainer>
      <InputContainer>
        <ISpan>
          <PasswordIcon />
        </ISpan>
        <Input type="password" required placeholder="Password" />
      </InputContainer>
      <Button type="submit">Log In</Button>
    </SignUpForm>
  );
};

export default SignIn;