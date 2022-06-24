import React from "react";
import Lists from "../../components/Lists";
import Bio from "../../components/Bio";
import { data } from "../../data/data";
import { Title, MainInfo } from "../../styles/styles";

const About = () => {
  return (
    <MainInfo>
      <Title>About</Title>
      <Bio bio={data.bio} />
      <Lists
        experience={data.experience}
        awards={data.awards}
      />
    </MainInfo>
  );
};

export default About;
