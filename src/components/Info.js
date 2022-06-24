import React from "react";
import { MainInfo, InfoSection, Imagen, Title } from "../styles/styles";

const Info = ({ name, lastname, nationality, age, occupation, avatar }) => {
  return (
    <MainInfo>
      <InfoSection>
        <Title>{name + " " + lastname}</Title>
        <p> Nationality: {nationality}</p>
        <p> Age: {age}</p>
        <p> Occupation: {occupation}</p>
      </InfoSection>
      <section>
        <Imagen src={avatar} alt="Avatar" className="imagen" />
      </section>
    </MainInfo>
  );
};

export default Info;
