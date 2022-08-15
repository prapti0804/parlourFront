import React from 'react'

function registation() {
  return (
    <div className='container'>
      <form>
    <div className='col col-8'>
    <div className="form-group row">
    </div>
    <div className="form-group">
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
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>

</form>
    </div>
  )
}

export default registation