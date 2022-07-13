import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className="main">
      <div className='container'>
      <div className="card mb-3">
        <Image src="/images/card1.jpg" className="card-img-top" alt="card1" height={120} width={120} />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <Image src="/images/card2.jpg" className="card-img-bottom" alt="card2" height={120} width={120} />
      </div>
      </div>
    </div>


  )
}
