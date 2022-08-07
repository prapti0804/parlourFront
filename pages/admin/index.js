import React from 'react'
import Link from 'next/Link'

const admin_index = () => {
    return (
        <div className='bg-success p-2 text-dark bg-opacity-10' >
            <div className="container overflow-hidden text-center">
                <div className="row gy-5">
                    <div className="col-6">
                        <div className="p-4 border bg-success p-2 text-white bg-opacity-75">
                            <Link href='add_services'>
                                <a >Services</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-4 border bg-info p-2 text-white bg-opacity-75">
                            <Link href='add_beautition'>
                                <a>Beautition</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-4 border bg-danger p-2 text-white bg-opacity-75">
                            <Link href='customer_details'>
                                <a >Customer</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-4 border bg-warning p-2 text-white bg-opacity-75">
                            <Link href='appointment_report'>
                                <a >Report</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default admin_index