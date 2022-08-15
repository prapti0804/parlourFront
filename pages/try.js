import { useState, useEffect } from 'react';
import Image from 'next/image'
import Head from 'next/head'

export default function Appointment() {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    useEffect(() => {
        console.log(user);
    }, [user]);
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
                            <form>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-floating mb-3 lg-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" /> 
                <label htmlFor="floatingInput">Email address</label>
                <small className="text-danger">
                
                </small>
            </div>
             <div className="form-floating lg=3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  />
                <label htmlFor="floatingPassword">Password</label>
                <small className="text-danger">
        
                </small>
              </div>
             <button type="submit" className="btn btn-primary btn-lg btn-block" >Sign in</button> 
            </div>
           </form>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-warning">We`ll never share your email with anyone else.</small>
             </div>
             <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
             </div>
             <div className="form-group">
               <label htmlFor="address" className="form-label mt-4">Address</label>
              <textarea className="form-control" id="address" rows="3"></textarea>
            
             <button type="submit" className="btn btn-primary">Submit</button>
           </div>
                </div>
            </div>
        </div>
    )
}