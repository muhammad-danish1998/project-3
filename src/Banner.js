import React from 'react'
import b1 from './baner/b1.jpg';
import b2 from './baner/b2.jpg';
import b3 from './baner/b3.jpg'
export const Banner = () => {
  return (
    <>
     <div className='container-fluid '>
        <div className='row' >
          <div className='col-10 mx-auto bannerTop' style={{marginTop:65}}>
      <div id="carouselExampleIndicators" className="carousel slide banner heightst" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={b1} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={b2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={b3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div></div></div>
    </>
  )
}
