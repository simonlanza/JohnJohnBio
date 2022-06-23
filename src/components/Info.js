import React from 'react';

const Info = ({ name, lastname, nationality, age, occupation, avatar, }) => {
    return (
        <main className='main'>
            <section>
                <h1>{name + " " + lastname}</h1>
                <p> Nationality: {nationality}</p>
                <p> Age: {age}</p>
                <p> Occupation: {occupation}</p>
            </section> 
            <section>
                <img src={avatar} alt="Avatar" className='imagen' />
            </section>
        </main>
    )
}

export default Info;