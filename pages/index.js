import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className="main">
      <div className='container'>
        <div className='row'>
          <div className="col col-sm-3 col-lg-3">
            <div className="card ">
              <Image src="/images/card1.jpg" className="card-img-top" alt="card1" height={120} width={120} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col col-sm-3 col-lg-3">
            <div className="card ">
              <Image src="/images/card2.jpg" className="card-img-top" alt="card2" height={120} width={120} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col col-sm-3 col-lg-3">
            <div className="card ">
              <Image src="/images/card3.jpg" className="card-img-top" alt="card3" height={120} width={120} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  <li>anti-cellulite polish, which uses invigorating ingredients to help improve circulation</li>
                  <li>“glow-enhancing” polish, which uses certain oils to leave the body feeling soft and nourished</li>
                  <li>tan-optimizing polish, which prepares the skin for optimal spray tan application</li>
                  <li>tan-optimizing polish, which prepares the skin for optimal spray tan application</li>
                </p>

                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>

          <div className='col clo-sm-3 col-lg-3'>
            <div className="card">
              <Image src="/images/card4.jpg" className="card-img-bottom" alt="card4" height={120} width={120} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
