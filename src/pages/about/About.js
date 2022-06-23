import React from "react";
import Header from "../../components/Header";
import Lists from "../../components/Lists";
import Bio from "../../components/Bio";
import { data } from "../../data/data";

const About = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Bio bio={data.bio} />
      <Lists
        experience={data.experience}
        awards={data.awards}
      />
    </div>
  );
};

export default About;
