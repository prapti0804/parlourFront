import { Link } from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/login.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

export default function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      {/* //     <div style={{ color: "blue" }}>
        //         User email <input type="text" id="uname" placeholder="jenny123@gmail.com" onChange={e => setUser(e.target.value)} value={user} />
        //         <br />
        //         Password <input type="text" id="pwd" onChange={e => setPwd(e.target.value)} value={pwd} />
        //         <p>
        //         { user}
        //         </p>

        //     </div> */}

    
      <div className="container">
                      
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1>Appointment Form</h1>
                            <p> Book your appointment to save salon rush.</p>
                            <form method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="control-label"htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Name" name="name" required="true"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="control-label"htmlFor="phone">phone</label>
                                        <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" required="true" length="10" pattern="[0-9]+"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="control-label"htmlFor="email">email</label>
                                         <input type="email" className="form-control" id="appointment_email" placeholder="Email" name="email" required="true"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="control-label"htmlFor="Subject">Services</label>
                                        <select name="services" id="services" required="true" className="form-control">
                                <option value="">Select Services</option>
                             
                              </select>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label className="control-label"htmlFor="textarea">Appointment Date</label>
                                            <input type="date" className="form-control appointment_date" placeholder="Date" name="adate" id='adate' required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group">
                                            <label className="control-label"htmlFor="textarea">Appointment Time</label>
                                            <input type="time" className="form-control appointment_time" placeholder="Time" name="atime" id='atime' required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" id="submit" name="submit" className="btn btn-default">Book</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  )
}