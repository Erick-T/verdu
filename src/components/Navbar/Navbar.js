import React from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Buttons/Button";
import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";



export default function Navbar() {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    };
    return (
        <nav className="NavbarItems">



            <h1 className="navbar-logo">Verdu<i className="fas fa-leaf"></i></h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>


                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}

            </ul>

            <Button>Sign Up</Button>

            <CartWidget />


        </nav>
    )
}

