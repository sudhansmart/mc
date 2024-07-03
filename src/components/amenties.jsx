import React from 'react'
import '../styles/amenties.css'
import car from '../assets/images/car-parking.png'
import cctv from '../assets/images/cctv.png'
import hotel from '../assets/images/restaurant.png'
import washrooms from '../assets/images/washroom.png'
import playarea from '../assets/images/playarea.png'
import tent from '../assets/images/tent.png'
import backup from '../assets/images/backup.png'
import dining from '../assets/images/dining.png'
import insects from '../assets/images/insects.png'

function Amenities() {
  return (
    <>
      <section className='amenities-section'>
        <h2>Amenities</h2><br/>
        {/* <div className='d-flex justify-content-center'> */}
        <div className='amenities-list'>
          <div className='amenities-item'>
            <img src={car} alt="car-parking" /><p>Car Parking</p></div>
          <div className='amenities-item'>
            <img src={cctv} alt="cctv" /><p>CCTV Surveillance</p></div>
            <div className='amenities-item'>
            <img src={hotel} alt="restaurant" /><p>Restaurant</p></div>
            <div className='amenities-item'>
            <img src={washrooms} alt="washroom" /><p>Clean Washrooms</p></div>
            <div className='amenities-item'>
            <img src={playarea} alt="playarea" /><p>Play Area</p></div>
            <div className='amenities-item'>
            <img src={tent} alt="tent" /><p>Sanitized Tent</p></div>
            <div className='amenities-item'>
            <img src={backup} alt="backup" /><p>Backup Shelters</p></div>
            <div className='amenities-item'>
            <img src={dining} alt="dining" /><p>Dining Area</p></div>
            <div className='amenities-item'>
            <img src={insects} alt="insects" /><p>Zero insects</p></div>
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Amenities
