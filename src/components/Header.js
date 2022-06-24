import React from "react";
import { HeaderContainer, HeaderButton } from "../styles/styles";
import GoTo from "./GoTo";

const Header = () => {
  return (
    <HeaderContainer className="header">
      <nav className="nav">
        <ul className="nav-ul">
          <HeaderButton>
            <GoTo argumentOne={"Home"} argumentTwo={"/"}></GoTo>
          </HeaderButton>
          <HeaderButton>
            <GoTo argumentOne={"About"} argumentTwo={"/about"}></GoTo>
          </HeaderButton>
          <HeaderButton>
            <GoTo argumentOne={"Contact"} argumentTwo={"/contact"}></GoTo>
          </HeaderButton>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
