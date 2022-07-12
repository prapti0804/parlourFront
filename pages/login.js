import { Link } from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/login.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

export default function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      {/* //     <div style={{ color: "blue" }}>
        //         User email <input type="text" id="uname" placeholder="jenny123@gmail.com" onChange={e => setUser(e.target.value)} value={user} />
        //         <br />
        //         Password <input type="text" id="pwd" onChange={e => setPwd(e.target.value)} value={pwd} />
        //         <p>
        //         { user}
        //         </p>

        //     </div> */}

    
      <div className="container">
        <div clasName="row">
          <div className="col 6">
            <form action="/action_page.php">
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
              </div>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" /> Remember me

                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}