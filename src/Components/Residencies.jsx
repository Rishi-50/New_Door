import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css'
import data from '../../src/utlis/slider.json'


const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className='orangeText'>Best choices</span>
            <span className='primaryText'>Popular Residencies</span>
          </div>

          <Swiper>
            {
              data.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className="flexColStart r-card">
                      <img src={card.image} alt="home" />

                      <span className="secondaryText r-price">
                        <span style={{color:'orange'}}>$</span><span>{card.price}</span>
                      </span>

                      <span className='primaryText'>{card.name}</span>
                      <span className='primaryText'>{card.detail}</span>
                      
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper>

        </div>
      </section>
    </div>
  )
}

export default Residencies
