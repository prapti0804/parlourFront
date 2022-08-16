import React from "react";
import backend from "../../config";

function appointmentointmentDetails(props) {
    return (
        <div className='container'>daily_report
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{props.data.user.name}</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>{props.data.user.email}</td>
                    </tr>
                    <tr>
                        <th>appointmentointment Date</th>
                        <td>{props.data.appointment.date}</td>
                    </tr>

                    <tr>
                        <th>appointmentointment Time</th>
                        <td>{props.data.appointment.date}</td>
                    </tr>

                    <tr>
                        <th>Services</th>
                        <td>{props.data.appointment.services.join('<br>')}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`${backend}/employee/app?id=${context.query.slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'appointmentlication/json',
            'Authorization': context.req.cookies['jwt']
        }
    });
    let data = response.json();
    return { props: data };
}

export default appointmentointmentDetails;