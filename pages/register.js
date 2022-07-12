import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export default function register() {
  return (
    <div>
      <div className="container">
        {/* <div className="form-floating mb-3"> */}
        {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlhtmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating lg=3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlhtmlFor="floatingPassword">Password</label>
            </div> */}
        <form>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputaadress" className="col-sm-2 col-form-label">address</label>
            <div className="col-sm-10">
            <textarea className="form-control" id="address" rows="3"></textarea>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputbdate" className="col-sm-2 col-form-label">Birth Date</label>
            <div className="col-sm-10">
            <input type="date" className="form-control" id="Bday" rows="3"></input>
            </div>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="female" value="option1" checked />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="male" value="option2" />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Male
                </label>
              </div>
              <div className="form-floating m">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label htmlhtmlFor="floatingSelect">Works with selects</label>
              </div>
            </div>
          </fieldset>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Example checkbox
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>

      </div>
    </div>
  )

}
