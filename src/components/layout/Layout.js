import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';


const Layout = ({children}) => {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/login" ? null : <Header />}
            {children}
        </>
    )
}

export default Layout;