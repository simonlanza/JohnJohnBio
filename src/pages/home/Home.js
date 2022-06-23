import React from "react";
import Header from "../../components/Header";
import Info from "../../components/Info";
import {data} from "../../data/data";

const Home = () => {
  return (
    <div>
        <Header />
        <Info
            name={data.personalData.name}
            lastname={data.personalData.lastname}
            nationality={data.personalData.nationality}
            age={data.personalData.age}
            occupation={data.personalData.occupation}
            avatar={data.personalData.avatar}
        />
    </div>
  );
};

export default Home;
