import React from 'react'

function daily_report() {
  return (
    <div>daily_report
      
      <div className="main-page">
      <div className="page-wrapper">
          <h3 className="title1">View Appointment</h3>

          <div className="tables">

          <div className="table-responsive bs-example widget-shadow">
            <p style={ {fontsize:16 , color:'red', align:'center'}}>
            <h4>View Appointment:</h4>
            </p>
            

            <table className="table table-bordered">
              <tr>
                <th>Appointment Number</th>
                <td>2332</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>avani</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>ashasw@gmail.comm</td>
              </tr>
              <tr>
                <th>Mobile Number</th>
                <td>576474653</td>
              </tr>
              <tr>
                <th>Appointment Date</th>
                <td>12/7/22</td>
              </tr>

              <tr>
                <th>Appointment Time</th>
                <td>10.30 am</td>
              </tr>

              <tr>
                <th>Services</th>
                <td>hair cut</td>
              </tr>
              <tr>
                <th>Apply Date</th>
                <td>10/7/22</td>
              </tr>


              <tr>
                <th>Status</th>
                <td>complet</td>
              </tr>
            </table>
            <table className="table table-bordered">


              <form name="submit" method="post" eslint="multipart/form-data">

                <tr>
                  <th>Remark :</th>
                  <td>
                    <textarea name="remark" placeholder="" rows="12" cols="14" className="form-control wd-450" required="true">
                      </textarea>
                  </td>
                </tr>

                <tr>
                  <th>Status :</th>
                  <td>
                    <select name="status" className="form-control wd-450" required="true" >
                      <option value="1" selected="true">Selected</option>
                      <option value="2">Rejected</option>
                    </select></td>
                </tr>

                <tr align="center">
                  <td><button type="submit" name="submit" className="btn btn-az-primary pd-x-20">Submit</button></td>
                </tr>
              </form>

            </table>
            <table className="table table-bordered">
              <tr>
                <th>Remark</th>
                <td>
                 
                </td>
              </tr>


              <tr>
                <th>Remark date</th>
                <td>12/8/22  </td></tr>

            </table>
          </div>
        </div>
      </div>
     </div>
    </div>
  ) 
}

export default daily_report