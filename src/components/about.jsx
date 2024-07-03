import React from 'react'
import '../styles/about.css'
import HoverRating from './rating'
import Site from './site'
import Attractions from './attractions'
import Amenties from './amenties'
import ColorTabs from './overview'


function About() {
  return (
   <>
 <div className='vellore'>
   <div className='left-container'>
   <h3 className='head' style={{ fontSize: '2em' }}>Jawadhu Hills</h3><HoverRating/> </div>
   <p className='para'>Vellore,Tamilnadu</p>

 </div>
  
   <Site/>
   <Attractions/>
   <Amenties/>
  <ColorTabs/>

   </>
  )
}

export default About