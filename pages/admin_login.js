// import { View, Text } from 'react-native'
import React from 'react'

export default function admin_login() {
  return (
       <div className='container'>
         <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlhtmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating lg=3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlhtmlFor="floatingPassword">Password</label>
            </div>
       </div>
  )
}