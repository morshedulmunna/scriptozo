import React from 'react';
import logo from '../../image/logo.png'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/navbar"> <img className="rounded-pill" height="50px" src={logo} alt="" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/link">Student</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="disabled">Courses</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success rounded-pill my-2 my-sm-0" type="submit">Search</button>
                        <button className="btn btn-outline-warning rounded-pill my-2 my-sm-0 ml-2" type="submit">Log In</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;