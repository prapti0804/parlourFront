import React from 'react'

const addServices = () => {
    return (
        <div className='container'>
            <div id="page-wrapper">
                <div className="main-page">
                    <div className="forms">
                        <h3 className="title1">Add Services</h3>
                        <div className="form-grids row widget-shadow" data-example-id="basic-forms">

                            <div className="form-body">
                                <form method="post">
                                    <div className="form-group">
                                        <label>Service Name</label>
                                        <input type="text" className="form-control" id="sername" name="sername" placeholder="Service Name" value="" required="true" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input className="form-control" name="des" id="des" rows="5" required="true" />
                                    </div>
                                    <div className="form-group">
                                        <label>Cost</label>
                                        <input type="text" id="cost" name="cost" className="form-control" placeholder="Cost" value="" required="true" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Default file input example</label>
                                        <input className="form-control" type="file" id="formFile" />
                                    </div>
                                    <button type="button" className="btn btn-primary btn-lg">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default addServices; 