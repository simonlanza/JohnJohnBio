import React from "react";
import { Link } from "react-router-dom";

const GoTo = ({argumentOne, argumentTwo}) => {
    return(
        <Link className="ul-item" to={argumentTwo}>{argumentOne}</Link>
    )
}

export default GoTo;