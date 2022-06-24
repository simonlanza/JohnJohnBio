import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightseagreen;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  width: 60vw;
  background-color: whitesmoke;
  border-radius: 30px;
  border: 1px solid purple;
  box-shadow: 0 0 55px rgba(125, 33, 129, 0.8);
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const Pswitch = styled.p`
  font-weight: 100;
  color: lightseagreen;
  button {
    font-size: 1rem;
    font-weight: bold;
    color: lightseagreen;
    background-color: whitesmoke;
    border: none;
    :hover {
      cursor: pointer;
    }
  }
`;

export const LabelCheckbox = styled.label`
  width: 15rem;
  font-weight: 100;
  font-size: 0.8rem;
  color: lightseagreen;
`

export const Input = styled.input`
  font-weight: 100;
  color: lightseagreen;
  background-color: whitesmoke;
  border: 1px solid lightseagreen;
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.3);
  height: 3rem;
  width: 20rem;
  ::placeholder {
    color: lightseagreen;
    padding-left: 35px;
  }
`

export const Button = styled.button`
  font-weight: 600;
  color: white;
  background-color: lightseagreen;
  width: 10rem;
  height: 2rem;
  border-radius: 25px;
  border: none;
  text-transform: uppercase;
  font-size: 0.7rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100vw;
  background-color: lightseagreen;
  padding-bottom: 30px;
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      width: 100%;
    }
  }  
`

export const HeaderButton = styled.button`
  font-weight: 100;
  color: lightseagreen;
  background-color: #40e0d0;
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  height: 3rem;
  width: 10rem;
  .ul-item{
    text-decoration: none;
    color: #031211;
  }
`

export const MainInfo = styled.main`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  background-color: lightseagreen;
  height: 100vh;
  width: 100vw;
`

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
` 

export const Imagen = styled.img`
  height: 40vh;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`

export const BioSection = styled.section`
  width: 80vw;
`

export const ListsSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20vw;
  .list-ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    background-color: #40e0d0;
    border-radius: 25px;
    height: 100%;
    width: 25vw;
    h4 {
      font-size: 1.5rem;
      padding-bottom: 10px;
    }
    li {
      list-style: georgian;
    }
  }
`