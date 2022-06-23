import React from "react";
import GoTo from "./GoTo";

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav-ul'>
                    <GoTo argumentOne={"Home"} argumentTwo={"/"}></GoTo>
                    <GoTo argumentOne={"About"} argumentTwo={"/about"}></GoTo>
                    <GoTo argumentOne={"Contact"} argumentTwo={"/contact"}></GoTo>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
