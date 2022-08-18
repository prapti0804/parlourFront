import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { register, handleSubmit, useForm } from 'react-hook-form';
import cookieCutter from 'cookie-cutter';


import backend from '../config';
import { bookAppointment, allServices } from '../routes'

function Appointment(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

    const handleRegistration = async (data) => {

        const response = await fetch(`${backend}${bookAppointment}`, {
            method: 'POST',
            body: JSON.stringify({
                appointment: {
                    date: data.adate,
                    time: data.atime,
                    services: [data.services]
                }
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookieCutter.get('jwt')
            }
        });        
    };

    const handleError = (errors) => { };
    const registerOptions = {
        name: {
            required: "name is required",
            pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Invalid name. only character values allowed."
            }
        },
        email: {
            required: "Email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
            }
        },
        address: {
            required: "Address is required",
            pattern: {
                value: /[a-zA-Z0-9 ]/,
                message: "Invalid Address"
            }
        },
        phone: {
            required: "Phone number required",
            pattern: {
                value: /[0-9]{10}/,
                message: "Invalid COntact Number"
            }
        }
    };

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
                                <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <label className="control-label" htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Name" name="name" required={true} {...register('name', registerOptions.name)} />
                                            <small className="text-danger">
                                                {errors?.name && errors.name.message}
                                            </small>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label" htmlFor="phone">phone</label>
                                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" length="10"  {...register('phone', registerOptions.phone)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label" htmlFor="email">email</label>
                                            <input type="email" className="form-control" id="appointment_email" placeholder="Email" name="email" {...register('email', registerOptions.email)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label" htmlFor="Subject">Services</label>
                                            <select name="services" id="services" required={true} className="form-control" {...register('services', registerOptions.services)}>
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
                                                <input type="date" className="form-control appointment_date" placeholder="Date" name="adate" id='adate' min={new Date().toISOString().split('T')[0]} required={true} {...register('adate', registerOptions.adate)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="textarea">Appointment Time</label>
                                                <input type="time" className="form-control appointment_time" placeholder="Time" name="atime" id='atime' required={true} {...register('atime', registerOptions.atime)} />
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

export default Appointment;