import React from 'react'

function add_beautition() {
  return (
    <div className='container'>
      <div className="main-page">
        <div className="forms">
          <h3 className="title1">Admin Profile</h3>
          <div className="form-grids row widget-shadow" data-example-id="basic-forms">
            <div className="form-title">
              <h4>Update Profile :</h4>
            </div>
            <div className="form-body">
              <form method="post">
                <p style={{ fontSize: "16px", color:"red"}} align="center">
                </p>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Admin Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="contactnumber">Contact Number</label>
                  <input type="text" id="contactnumber" name="contactnumber" className="form-control"  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" className="form-control" />
                </div>
                <button type="submit" name="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default add_beautition