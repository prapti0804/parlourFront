import React from 'react';
import Image from 'next/image';
import Link from 'next/Link';


export default function offer() {
    return (
        <div className='container bg-success p-2 text-dark bg-opacity-10'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <Image src="/images/service4.jpg" className="card-img-top border border-warning" alt="service1" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-warning">Spa</h5>
                            <p className="card-text text-dark">
                            Relaxation spas are also referred to as pampering spas or pampering and relaxation spas. As these names suggest, stress and tension relief are the aims of these venues, which offer prescription massages, body scrubs, hydrotherapy treatments and thermal therapies to help guests escape lifes worries
                            </p>
                            <Link href="appointment">
                                <a className="btn btn-primary">Fix Appointment</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

