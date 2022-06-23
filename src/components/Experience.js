import React from "react";

const Experience = ({ experience }) => {
    return (
        <ul className="list-ul">
            <h4>Movies</h4>
            {experience.map(movie => (
                <li key={movie.id}>{movie.movie}</li>
            ))}
        </ul>
    )
}

export default Experience;