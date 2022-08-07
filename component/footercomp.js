import React from 'react'
// import styles from '../styles/footercom.module.css'
export default function FooterComp() {
  return (
    <div style={{ color: 'gray', padding: 20 }}>
      <div className="container-fluid bg-dark">
        <footer className="py-5">
          <div style={{ backgroundColor: "dark" }}>
            <div className="row">
              <div className="col-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="" className="nav-link p-0 text-muted">Home</a></li>
                  <li className="nav-item mb-2"><a href="appointments.js" className="nav-link p-0 text-muted">APPOINTMENT</a></li>
                  <li className="nav-item mb-2"><a href="about.js" className="nav-link p-0 text-muted">ABOUT US</a></li>
                  <li className="nav-item mb-2"><a href="offers.js" className="nav-link p-0 text-muted">OFFERS</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                </ul>
              </div>

              <div className="col-3">
                <h5>Section</h5>
                <h4>Avani Beauty Parlour</h4><br />
                <p>
                  Nivrutti Nagar,Vadgoan Bk.,Pune 41<br />
                  avaniparlor@gmail.com
                </p>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between py-1 my-2 border-top">
              <p>&copy; All rights reserved@avaniparlor website created by Prapti Patil</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

