import React from "react";
import { BioSection } from "../styles/styles";

const Bio = ({ bio }) => {
    return (
        <BioSection className='bio'>
            <p>{bio}</p>
        </BioSection>
    )
}

export default Bio;