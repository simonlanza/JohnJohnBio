import React from "react";
import {
  HeaderContainer,
  HeaderButton,
  SearchButton,
  SearchForm,
  SearchInput,
} from "../styles/styles";
import GoTo from "./GoTo";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handler = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <HeaderContainer>
      <SearchForm onSubmit={handler}>
        <SearchInput type="text" placeholder="Search" />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchForm>
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
