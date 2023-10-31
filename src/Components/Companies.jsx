import React from 'react'
import './Companies.css'

const Companies = () => {
  return (
    <div>
        <section className="c-wrapper">
            <div className="paddings flexCenter innerWidth c-container">
                <img src="./equinix.png" alt="comapany 1" />
                <img src="./prologis.png" alt="comapany 2" />
                <img src="./realty.png" alt="comapany 3" />
                <img src="./tower.png" alt="comapany 4" />
            </div>
        </section>
    </div>
  );
}

export default Companies
