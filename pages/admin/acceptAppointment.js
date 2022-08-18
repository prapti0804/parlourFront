import React from 'react'
import Link from 'next/link';
import backend from '../../config';

function AcceptAppointment(props) {
  return (
    <table className=' container table table-bordered'>
    <thead>
      <tr>
        <td>Sr.No</td>
        <td>Name</td>
        <td>email</td>
        <td>Appointment-Date</td>
        <td>Appointment-Time</td>
        <td>Status</td> 
      </tr>
    </thead>
    <tbody>
      {props.data.map((app, i) => {
        return (
          <tr key={i}>
            <td>
              {i + 1}
            </td>
            <td>
              {app.user.name}
            </td>
            <td> 
              {app.user.email}
            </td>

            <td>{app.appointment.date}
            </td>
            <td>
              {app.appointment.time}
            </td>
            <td>
                  <button type="button" id="submit" name="Accept" className="btn btn-primary">Accept</button>
                  <button type="button" id="submit" name="Reject" className="btn btn-danger">Reject</button>
            </td>
          </tr>
       );
      })} 
    </tbody>
  </table>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${backend}/admin/appointments`, {
    method: 'POST',
    headers: {
      'Authorization': context.req.cookies['jwt'],
      'Content-Type': 'application/json'
    }
  });
  let data = await response.json();
  console.log(data);
  return {
    props: data,
  }
}

export default AcceptAppointment;