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
                        <Image src="/images/service1.jpg" className="card-img-top border border-warning" alt="service1" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">Hair Treatment</h5>
                            <p className="card-text text-dark">
                            Hair treatments generally refer to any means of managing common hair related problems such as hair fall, dryness, dandruff, frizzy hair, thinning hair, and so on. The treatments vary in terms of the problem you are suffering from because different ingredients and elements are required to tackle them.
                            </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service2.jpg" className="card-img-top border border-warning" alt="service2" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">Facial</h5>
                            <p className="card-text text-dark">
                            A basic facial is a skin treatment used to clean pores, remove dead skin cells, and treat common skin concerns like acne, dark circles, and wrinkles and other signs of aging. Modern facial treatments are a surefire way to get smooth, supple skin and improve your general appearance.
                            </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service3.jpg" className="card-img-top border border-warning" alt="service3" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">Pedicure</h5>
                            <p className="card-text text-dark">
                            A pedicure is a treatment that is used to cleanse and groom feet and toenails. In this treatment, the dead skin cells on the bottom of the feet are scraped away. This technique also massages the foot muscles, which relaxes them. The nails are then shaped to the desired length and shape.
                                </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <Image src="/images/service5.jpg" className="card-img-top border border-warning" alt="service4" height={300} width={200} />
                        <div className="card-body">
                            <h5 className="card-title text-dark">bridal makeup</h5>
                            <p className="card-text text-dark">
                            Bridal packages will mostly include hair, makeup and draping, which means they will help you do your bridal makeup, your bridal hairstyle and help you drape your saree or wedding trousseau. Professionals also help put on your wedding jewellery at the makeup venue, if you are going for costume jewellery.
                                </p>
                            <Link href="appointment">
                                <a  className="btn btn-primary">Fix Appointment</a>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
