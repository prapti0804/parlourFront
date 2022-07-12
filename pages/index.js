import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div>
      <div className='row'>
       <div className='col-3'>
        <div className={styles.card} >
          <Image src="/images/card1.png" alt="Card image" height={120} width={150} className ="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
         </div>
        </div>
         <div className='col-3'>
         <div className={styles.card}>   
            <Image src="/images/card2.jpg" alt="Card image" height={120} width={150} className ="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
        </div>
      </div>
      <div className='col-3'>
        <div className={styles.card} >
          <Image src="/images/card1.png" alt="Card image" height={120} width={150} className ="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
         </div>
        </div>
        <div className='col-3'>
        <div className={styles.card} >
          <Image src="/images/card1.png" alt="Card image" height={120} width={150} className ="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
         </div>
        </div>
        
    </div>
    <div className='footer a'>
      this sis footers
    </div> 
    </div> 
  )
}
