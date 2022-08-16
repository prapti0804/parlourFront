import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavComp() {
    return (
        <div>
            <div className="container-fluid">

                <div>

                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top custom_nav-container">
                        <div className="container-fluid bg-dark">
                            <Link href="index.js">
                                <a className="navbar-brand">Logo</a>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-Link navbar-brand">Home </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="appointment">
                                            <a className="nav-Link navbar-brand">Appointment</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="about">
                                            <a className="nav-Link navbar-brand">About Us </a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="offer">
                                            <a className="nav-Link navbar-brand">Offers</a>

                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="login">
                                            <a className="nav-Link navbar-brand">Login</a>

                                        </Link>
                                    </li>
                                </ul>
                                <form className="d-flex bg-denger">
                                    <input className="form-control me-2" type="text" placeholder="Search" />
                                    <button className="btn btn-primary" type="button">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='p-2 text-white bg-opacity-25 border border-info bg-danger' >
                    <div className='text-center'>
                        <h1>Avani Parlour</h1>
                        <p>Nivrutti Nager B1,Vadgaon Budruk,Pune</p>
                        <Image src="/images/header.jpg" alt='Logo' height={120} width={220} />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default NavComp; 