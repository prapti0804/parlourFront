import React from 'react'
import Link from 'next/link'

import backend from '../../config'
import { allAppointments } from '../../routes'
const index = (props) => {
  return (
    
    <table className=' container table table-bordered'>
      <thead>
        <tr key={1}>
          <td>Sr.No</td>
          <td>Name</td>
          <td>email</td>
          <td>Appointment-Date</td>
          <td>Appointment-Time</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.data.map((app, i) => {
          return (
            
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{app.user.name}</td>
              <td>{app.user.email}</td>

              <td>{app.appointment.date}</td>
              <td>{app.appointment.time}</td>
              <td>
                <Link href={`beautician/${app.appointment._id}`}>
                  <a className='nav-Link navbar-brand'>View</a>
                </Link>
              </td>
            </tr>
          );
        })}

      </tbody>
    </table>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${backend}${allAppointments}`, {
    method: 'POST',
    headers: {
      'Authorization': context.req.cookies['jwt'],
      'Content-Type': 'application/json'
    }
  });
  let data = await response.json();
  return {
    props: data,
  }
}

export default index