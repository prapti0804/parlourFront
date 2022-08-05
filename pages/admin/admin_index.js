import React from 'react'

const admin_index = () => {
    return (
        <div className='bg-success p-2 text-dark bg-opacity-10' >
            <div className="container overflow-hidden text-center">
                <div className="row gy-5">
                    <div className="col-6">
                        <div className="p-4 border bg-success p-2 text-white bg-opacity-75">
                            <a href='add_services'>Services</a>
                            <link href='add_services.js'></link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-4 border bg-info p-2 text-white bg-opacity-75">
                            <a href='add_beautition'>Beautition</a>
                            <link href='add_beautition.js'></link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-4 border bg-danger p-2 text-white bg-opacity-75">
                            <a href='customer_details'>Customer</a>
                            <link href='customer_details.js'></link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-4 border bg-warning p-2 text-white bg-opacity-75">
                            <a href='appointment_report'>Report</a>
                            <link href='appointment_report.js'></link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default admin_index