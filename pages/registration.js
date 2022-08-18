import React, { useState } from 'react'
import { register, handleSubmit, useForm } from 'react-hook-form';
import { Router, useRouter } from 'next/router';

import backend from '../config';
import {registerRoute} from '../routes'

function Registration() {

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const [error, setError] = useState(0);
  const router = useRouter()

  const handleRegistration = async (data) => {
    const response = await fetch(`${backend}${registerRoute}`, {
      method: 'POST',
      body: JSON.stringify({
        'name': data.name,
        'address': data.address,
        'email': data.email,
        'password': data.password,
        'role':'customer'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    if (response.status === 200)
      router.push('/login')
    else
      setError(1)
  };

  const handleError = (errors) => { };
  const registerOptions = {
    name: {
      required: "name is required",
      pattern: {
        value: /^[a-zA-Z ]+$/,
        message: "Invalid name. only character values allowed."
      }
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    },
    password: {
      required: "Password is required",
      pattern: {
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        message: "Password must contain uppercase, lowercase & number"
      },
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    confirmpass: {
      required: "Confirm Password is required",
    },

    address: {
      required: "Address is required",
      pattern: {
        value: /[a-zA-Z0-9 ]/,
        message: "Invalid Address"
      }
    }
  };

  return (
    <div className='container'>
      <div className='col col-12 col-md-12'>
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="form-group row">
          </div>
          {error == 1 ? <div className="alert alert-danger d-flex align-items-center" role="alert">
            <i className="fas fa-times"></i> &nbsp;Registration Failed. User may already exist.
          </div> : <></>}
          <div className="form-group">
            <label htmlFor="name" className="form-label mt-4">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter Name" {...register('name', registerOptions.name)} />
            <small className="text-danger">{errors?.name && errors.name.message}</small>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" {...register('email', registerOptions.email)} />
            <small id="emailHelp" className="form-text text-warning">We`ll never share your email with anyone else.</small>
            <small className="text-danger">{errors?.email && errors.email.message}</small>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label mt-4">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" {...register('password', registerOptions.password)} />
            <small className="text-danger">{errors?.password && errors.password.message}</small>
          </div>

          <div className="form-group">
            <label htmlFor="cpassword" className="form-label mt-4">Password</label>
            <input type="password" className="form-control" id="cpassword" placeholder="Password"  {...register('confirmpass', registerOptions.confirmpass)} />
            <small className="text-danger">{errors?.confirmpass && errors.confirmpass.message}</small>
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label mt-4">Address</label>
            <textarea className="form-control" id="address" rows="3" {...register('address', registerOptions.address)}></textarea>
            <small className="text-danger">{errors?.address && errors.address.message}</small>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Registration