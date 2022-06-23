import React from "react"
import Experience from "./Experience"
import Awards from "./Awards"

const Lists = ({ experience, awards }) => {
    return (
        <section className='lists'>
            <Experience experience={experience} />
            <Awards awards={awards} />
        </section>
    )
}

export default Lists;