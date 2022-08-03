import React from "react";
import {
  LoginContainer,
  Button,
  LoginDiv,
  ButtonContainer,
} from "../../styles/styles";
import { useNavigate, Outlet } from "react-router-dom";

const Login = ({ setIsLogged }) => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <LoginDiv>
        <h1>Welcome to John John Florence Page</h1>
        <p>You need to be looged in to view the content on this page.</p>
        <p>
          Please clik on Sign In to enter with your account, or create a free
          account by clicking on Sign Up.
        </p>
        <p>
          Our page is still on development, so some functionalities may not be
          working.
        </p>
        <ButtonContainer>
          <Button onClick={() => navigate("signin")}>Sign In</Button>
          <Button onClick={() => navigate("signup")}>Sign Up</Button>
        </ButtonContainer>
      </LoginDiv>
      <Outlet />
    </LoginContainer>
  );
};

export default Login;
