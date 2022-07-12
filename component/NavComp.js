import React from 'react';
import Image from 'next/image';

function NavComp() {
    return (
        <div>
            <div>
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                        <div className="container-fluid">
                                <a className="navbar-brand">Logo</a>
                                <link href="index.js">
                            </link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">              
                                        <a className="nav-link">Home</a>
                                        <link href="/"></link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login">Login</a>
                                        <link href="login.js"></link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="register">Register</a>
                                        <link herf="register.js"></link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="offer">Offers</a>
                                        <link href="offer.js"></link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="text" placeholder="Search" />
                                    <button className="btn btn-primary" type="button">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='text-center'>
                    <h1>Avani Parlor</h1>
                    <p>Nivrutti Nager B1,Vadgaon Budruk,Pune</p>
                    <Image src="/images/logo.jpg" alt='Logo' height={120} width={120} />
                </div>
            </div>
        </div>
    )
}

export default NavComp;