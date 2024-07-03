import React from 'react'
import '../styles/attractions.css'
import stargazing from '../assets/images/stargazing.png'
import observatory from '../assets/images/observatory.png'
import waterfall from '../assets/images/waterfall.png'
import kayak from '../assets/images/kayak.png'
import hiking from '../assets/images/hiking.png'
import camp from '../assets/images/campfire.png'
function Attractions() {
  return (
  <>
  <section className="attractions">
      <h2>Attractions</h2><br/>
      {/* <div className='d-flex justify-content-center'> */}
      <div className="attraction-list">
        <div className="attraction">
            <img src={stargazing} alt="star" /><p>Star Gazing</p></div>
        <div className="attraction">
            <img src={observatory} alt="observatory" /><p>Observatory Visit</p></div>
        <div className="attraction">
            <img src={waterfall} alt="waterfall" /><p>Water Falls</p></div>
        <div className="attraction">
            <img src={kayak} alt="kayak" /><p>Kayaking</p></div>
        <div className="attraction">
            <img src={hiking} alt="hiking" /><p>Hiking</p></div>
        <div className="attraction">
            <img src={camp} alt="camp" /><p>Camp Fire</p></div>
      </div>
      {/* </div> */}
    </section></>
  )
}

export default Attractions