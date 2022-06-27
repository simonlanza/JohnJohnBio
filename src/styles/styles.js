import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightseagreen;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  gap: 5vw;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  width: 40vw;
  background-color: whitesmoke;
  border-radius: 30px;
  border: 1px solid purple;
  box-shadow: 0 0 55px rgba(125, 33, 129, 0.8);
  flex-wrap: wrap;
  h1{
    padding: 20px;
    text-align: center;
  }
  p {
    padding: 10px;
    text-align: center;
    color: lightseagreen;
  }
`

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70vh;
  width: 40vw;
  background-color: whitesmoke;
  border-radius: 30px;
  border: 1px solid purple;
  box-shadow: 0 0 55px rgba(125, 33, 129, 0.8);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

export const LabelCheckbox = styled.label`
  width: 15rem;
  font-weight: 100;
  font-size: 0.8rem;
  color: lightseagreen;
`

export const InputContainer = styled.div`
  display: flex;
  width: 70%;
  gap: 5px;
  position: relative;
`

export const ISpan = styled.span`
  position: absolute;
  top: 7px;
  left: 4px;
  padding: 2%;
`

export const Input = styled.input`
  font-weight: 100;
  color: lightseagreen;
  background-color: whitesmoke;
  border: 1px solid lightseagreen;
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.3);
  height: 3rem;
  width: 100%;
  padding-left: 40px;
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
  height: 15vh;
  width: 100vw;
  background-color: lightseagreen;
  padding-bottom: 30px;
  gap: 20px;
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
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

export const SearchInput = styled.input`
    width: 400px;
    height: 27px;
    padding: 10px;
    border: none;
    box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
    background-color:  #40e0d0;;
    :focus{
        outline: none;
    }
    border-radius: 25px 0 0 25px;
`;

export const SearchButton = styled.button`
    padding: 10px;
    border: none;
    border-radius: 0 25px 25px 0;
    background-color: #40e0d0;
    
`;


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