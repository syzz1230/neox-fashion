import React from 'react'
import './Banner.css'
 import image from '../../assets/images/UI/banner.jpg'



const Banner = () => {
  return (
      <section className='banner-section'>
          <div className='banner'>
              <img src={image} alt='banner' width='100%' />
          </div>
      </section>
  );
}

export default Banner
