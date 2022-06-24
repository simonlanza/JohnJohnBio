import React from "react"
import Experience from "./Experience"
import Awards from "./Awards"
import { ListsSection } from "../styles/styles"

const Lists = ({ experience, awards }) => {
    return (
        <ListsSection>
            <Experience experience={experience} />
            <Awards awards={awards} />
        </ListsSection>
    )
}

export default Lists;