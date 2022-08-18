import React, { useState } from 'react';
import { register, handleSubmit, useForm } from 'react-hook-form';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { login } from '../routes';

function Login(props) {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const handleError = (errors) => { };
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleLogin = async (data) => {
    console.log(data);
    const response = await fetch("/api/login", {
      method: 'POST',
      body: JSON.stringify({
        'email': data.email,
        'password': data.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    const responseData = await response.json();
    cookieCutter.set('jwt', responseData['jwt'], { expires: new Date(Date.now() + 86400) });
    cookieCutter.set('name', responseData['name'], { expires: new Date(Date.now() + 86400) });
    cookieCutter.set('role', responseData['role'], { expires: new Date(Date.now() + 86400) });


    if (responseData['role'] === 'customer')
      router.push('/')
    else if (responseData['role'] === 'employee')
      router.push('/beautician/')
    else if (responseData['role'] === 'admin')
      router.push('/admin/')
  }

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <section className='vh-80'>
      <div className="container bg-success p-2 text-dark bg-opacity-10">
        <div className='col col-12 col-md-12 '>
          <div className='row'>
            <div className='container bg-success p-2 text-dark bg-opacity-10'>
              <form onSubmit={handleSubmit(handleLogin, handleError)}>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <div className="form-floating mb-3 ">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  {...register('email', registerOptions.email)} />
                    <label htmlFor="floatingInput">Email address</label>
                    <small className="text-danger">
                      {errors?.email && errors.email.message}
                    </small>
                  </div>
                  <div className="form-floating lg=3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register('password', registerOptions.password)} />
                    <label htmlFor="floatingPassword">Password</label>
                    <small className="text-danger">
                      {errors?.password && errors.password.message}
                    </small>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-block" >Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
Login.propTypes = {}

export default Login;