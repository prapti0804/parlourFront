import React from 'react'

function add_beautition() {
  return (
    <div>
      <div className="main-page">
        <div className="forms">
          <h3 className="title1">Admin Profile</h3>
          <div className="form-grids row widget-shadow" data-example-id="basic-forms">
            <div className="form-title">
              <h4>Update Profile :</h4>
            </div>
            <div className="form-body">
              <form method="post">
                <p style="font-size:16px; color:red" align="center">
                </p>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Admin Name</label>
                  <input type="text" className="form-control" id="adminname" name="adminname" placeholder="Admin Name" value="" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">User Name</label>
                  <input type="text" id="username" name="username" className="form-control" value="" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Contact Number</label>
                  <input type="text" id="contactnumber" name="contactnumber" className="form-control" value="" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Email address</label>
                  <input type="email" id="email" name="email" className="form-control" value="" />
                </div>
                <button type="submit" name="submit" className="btn btn-default">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default add_beautition