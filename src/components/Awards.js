import React from "react";

const Awards = ({ awards }) => {
    return (
        <ul className="list-ul">
            <h4>Awards</h4>
            {awards.map(institute => (
                <li key={institute.id}>{institute.institute}</li>
            ))}
        </ul>
    )
}

export default Awards;