import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import backend from '../config';
import { allServices } from '../routes'

function appointment(props) {
    return (
        <div>
            <Head>
                <title>Appointments</title>
            </Head>
            <div className="container bg-success p-2 text-dark bg-opacity-10">
                <div className='row'>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h1 className='text-center'>Appointment Form</h1>
                                <p className='text-center'> Book your appointment to save salon rush.</p>
                                <form method="post">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <label className="control-label" htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Name" name="name" required={true} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label" htmlFor="phone">phone</label>
                                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" required={true} length="10" pattern="[0-9]+" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label" htmlFor="email">email</label>
                                            <input type="email" className="form-control" id="appointment_email" placeholder="Email" name="email" required={true} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label" htmlFor="Subject">Services</label>
                                            <select name="services" id="services" required={true} className="form-control">
                                                <option value="" disabled selected>Select Services</option>
                                                {props.services.map((service, index) => {
                                                    return (<option value={service.name} key={service._id}>{service.name}</option>)
                                                }
                                                )}
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="textarea">Appointment Date</label>
                                                <input type="date" className="form-control appointment_date" placeholder="Date" name="adate" id='adate' min={new Date().toISOString().split('T')[0]} required={true} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="textarea">Appointment Time</label>
                                                <input type="time" className="form-control appointment_time" placeholder="Time" name="atime" id='atime' required={true} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button type="submit" id="submit" name="submit" className="btn btn-primary">Book</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Image src="/images/appoin.jpg" alt="appointment pic" className='border border-dark' height={400} width={350} />

                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`${backend}${allServices}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await response.json();
    return {
        props: data,
    }
}

export default appointment