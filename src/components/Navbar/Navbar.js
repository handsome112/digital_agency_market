import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return(
        <header className="header-color">
            <nav className="navbar navbar-expand-lg text-center">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src = {'logo.png'} style = {{width:'100px'}} /></Link>  
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            {/* <i className="glyphicon glyphicon-home"></i> */}
                            &#9776;
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Our Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </header>
    );
}

export default Navbar;