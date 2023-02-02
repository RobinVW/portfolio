import React from "react";
import NavFlyoutToggle from "../NavFlyoutToggle/NavFlyoutToggle";

//styles
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <a href="/">Robuust</a>
		    <NavFlyoutToggle />
        </nav>
    )
}

export default Navbar;