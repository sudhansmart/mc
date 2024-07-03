
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/site.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Row,FloatingLabel,} from 'react-bootstrap';



function Site() {
  const [date1, setDate1] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const handleAdultChange = (e) => setAdults(Number(e.target.value));
  const handleChildChange = (e) => setChildren(Number(e.target.value));
  const toggleReadMore = () => setReadMore(!readMore);

  const adultPrice = 1000;
  const childPrice = 500;
  const total = (adults * adultPrice) + (children * childPrice);
   
  

  return (
    <section className="container">
      <div className="left-content ">
        <h2>About the camp site</h2>
        <p className='content'>
          The Jawadhu Hills, located in the Eastern Ghats of Tamil Nadu, India, are a picturesque range known for their lush greenery and serene landscapes.
           Rising to an elevation of around 3,800 feet, these hills are a haven for nature enthusiasts and trekkers. The region is rich in flora and fauna, with several endemic species. The charming town of Jamunamarathur serves as a gateway to the hills, offering a glimpse into the local tribal culture. The Jawadhu Hills are also famous for their coffee plantations and the tranquil Beemanmadavu Waterfalls. Visitors can enjoy a peaceful retreat away from the hustle and bustle of city life, immersed in the natural beauty and tranquility of the hills.
          {readMore && (
            <span>Additional content about the camp site... </span>
          )}
        </p>
        <button className="read-more" >
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      </div>

      <div className="right-content">
        <div className="card">
          <div className="card-header  text-white text-center">
            <h4>₹ 2000 (adult - 1000)</h4>
          </div>
          <div className="card-body">
          
            <div className="guest-selector mb-3">
              <div className="mb-2">
                <label>No of Adults</label>
                <input
                  type="number"
                  value={adults}
                  onChange={handleAdultChange}
                  placeholder="No of Adults"
                  className="form-control"
                />
              </div>
              <div>
                <label>No of children</label>
                <input
                  type="number"
                  value={children}
                  onChange={handleChildChange}
                  placeholder="No of children"
                  className="form-control"
                />
              </div>
            </div>
            <div className="total">
              <h5>Total: ₹ {total}</h5>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Site;
