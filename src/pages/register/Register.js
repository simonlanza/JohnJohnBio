import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({setIsLogged}) => {
    const navigate = useNavigate();
    const handlerSubmit = (e) => {
        e.preventDefault();
        setIsLogged(true);
        navigate('/home');
    }
    return (
        <form onSubmit={handlerSubmit} style={{display: "flex", flexDirection: "column", width: "400px"}}>
            <input placeholder='name' />
            <input placeholder='email' />
            <input placeholder='password' />
            <button onClick={handlerSubmit}>Register</button>
        </form>
    );
}

export default Register;