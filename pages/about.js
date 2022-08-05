import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export default function register() {
    return (
        <div>
            <div className="container bg-success p-2 text-dark bg-opacity-10">
                {/* <div className="form-floating mb-3"> */}
                {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlhtmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating lg=3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlhtmlFor="floatingPassword">Password</label>
            </div> */}
                <div className="page-header bg-success p-2 text-dark bg-opacity-10">
                    <div className="container">
                     <h1>Aout us</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="container col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div className="row">
                            
                                <div className="widget widget-contact col-lg-5 col-md-5 col-sm-8 col-xs-12">

                                    {/* <!-- widget search --> */}
                                    <h3 className="widget-title">Contact Info</h3>
                                    <address>
                                        <strong>Address.</strong>
                                        <br /> Nivrutti Nager,Vadgoan bk,Pune
                                        <br />
                                        <br />
                                        <abbr title="Phone">Phone:</abbr>
                                    </address>
                                    <address>
                                        <strong>Email</strong>avaniparlor@gmail.com
                                        <br />
                                    </address>
                                    <address>
                                        <strong>Timing</strong>10:00am TO 9:00pm
                                        <br />

                                    </address>

                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-8 col-xs-12">
                                    <div className="well-block">
                                        <h1>About Us</h1>
                                        <h5 className="small-title ">best experience ever</h5>
                                        <p>Our main focus is on quality and hygiene. Our Parlour is well equipped with advanced technology equipments and provides best quality services. Our staff is well trained and experienced, offering advanced services in Skin, Hair and Body Shaping that will provide you with a luxurious experience that leave you feeling relaxed and stress free. The specialities in the parlour are, apart from regular bleachings and Facials, many types of hairstyles, Bridal and cine make-up and different types of Facials and fashion hair colourings.</p>


                                    </div>
                                </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
