import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import DemoContext from '../DemoContext';

const Header = () => {
    const {user} =useContext(DemoContext);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/navigation_logo.png" alt="AIRPORT PARKING - RESERVATIONS.COM" height="40" />
                </Link>
                <div className="col">
                   
                </div>
                
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item" style={{color:'wheat'}}>
                        name:{user?.name}</li>
                        <li className="nav-item" style={{color:'wheat'}}> email: {user?.email}</li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">
                               Login
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Account
                            </a>
                            <div className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item sign-in" href="#">Sign In</a>
                                <a className="dropdown-item sign-up" href="#">Register</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;