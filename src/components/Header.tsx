import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/style.scss'
import logo from '../img/logo.png';

const Header = () => (
            <React.Fragment>
                <header id="header" className="fixed-top">
                    <div className="container">

                    <div className="logo float-left">
                        <a href="#intro" className="scrollto"><img src={logo} alt="" className="img-fluid"/></a>
                    </div>

                    <nav className="main-nav float-right d-none d-lg-block">
                        <ul>
                        <li className="active"><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/About">About Us</NavLink></li>
                        <li><NavLink to="/Services">Services</NavLink></li>
                        <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/Team">Team</NavLink></li>
                        <li className="drop-down"><a href="">Drop Down</a>
                            <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li className="drop-down"><a href="#">Drop Down 2</a>
                                <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Drop Down 3</a></li>
                            <li><a href="#">Drop Down 4</a></li>
                            <li><a href="#">Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><NavLink to="/Contact">Contact Us</NavLink></li>
                        <li><NavLink to="/Login">Login</NavLink></li>
                        </ul>
                    </nav>
                    
                    </div>
                </header>
        </React.Fragment>
     );

     export default Header;