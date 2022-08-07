import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

// import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
    return (
        <div className="container bg-success p-2 text-dark bg-opacity-10">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <Image src="/images/service1.jpg" className="card-img-top" alt="service1" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link href="appointment.js">
                                <a href="appointment" className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service2.jpg" className="card-img-top" alt="service2" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link href="appointment.js">
                                <a href="appointment" className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service3.jpg" className="card-img-top" alt="service3" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <Link href="appointment.js">
                                <a href="appointment" className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service4.jpg" className="card-img-top" alt="service4" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Link href="appointment.js">
                                <a href="appointment" className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
