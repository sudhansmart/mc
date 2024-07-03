import React from 'react';
import '../styles/overview.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import over1 from '../assets/images/over1.png';
import over2 from '../assets/images/over2.png';
import over3 from '../assets/images/over3.png';
import over4 from '../assets/images/over4.png';
import over5 from '../assets/images/over5.png';
import over6 from '../assets/images/over6.png';
import over7 from '../assets/images/over7.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-container">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className="tabs"
      >
        <Tab value={0} label="Overview" className="tab" />
        <Tab value={1} label="Itinerary" className="tab" />
        <Tab value={2} label="Our Packages" className="tab" />
        <Tab value={3} label="Reviews" className="tab" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="section">
          <img src={over1} alt="Camping in the Hills" className="section-image" />
          <div className='tab-text'>
            <h2>Camping in the Hills</h2>
            <p>
              Unwind in serene tent accommodations, nestled amidst tranquil surroundings, promising a peaceful retreat.
              Embrace a restful night's sleep like never before, cradled by nature's calming embrace, ensuring an unparalleled rejuvenation.
            </p>
          </div>
        </div>

        <div className="section align-right">
          <div className="text-content">
            <h2>Astro Physics Observatory</h2>
            <p>
              Begin your odyssey at the second largest observatory in Asia, where the skies unravel their celestial secrets. 
              Witness stars, planets, and galaxies adorn the canvas of the night, a mesmerizing spectacle that sparks wonder and ignites curiosity.
            </p>
          </div>
          <img src={over2} alt="Astro Physics Observatory" className="section-image" />
        </div>

        <div className="section">
          <img src={over3} alt="Nature's Arena" className="section-image" />
          <div>
            <h2>Nature's Arena</h2>
            <p>
              Step into a sprawling natural lawn, a haven for team building and collaborative exercises amidst nature's embrace. 
              Engage in activities crafted to strengthen unity and camaraderie, providing a rejuvenating break within lush surroundings, 
              alleviating stress, and building team spirit.
            </p>
          </div>
        </div>

        <div className="section align-right">
          <div className="text-content">
            <h2>Stargazing</h2>
            <p>
              Discover the wonders of stargazing in a low-light pollution zone, offering pristine skies for cosmic marvels. 
              Immerse yourself in the captivating symphony of the night sky amidst nature's tranquility, fostering a unique 
              human connection with the celestial wonders.
            </p>
          </div>
          <img src={over4} alt="Stargazing" className="section-image" />
        </div>

        <div className="section">
          <img src={over5} alt="Relaxing kayaking" className="section-image" />
          <div>
            <h2>Relaxing kayaking</h2>
            <p>
              Kayaking on a calm lake is a serene and recreational water activity. Paddling across still waters offers a peaceful escape 
              and an opportunity to connect with nature in a safe, controlled environment.
            </p>
          </div>
        </div>

        <div className="section align-right">
          <div className="text-content">
            <h2>Waterfalls</h2>
            <p>
              Experience the natural refreshment of a mountain waterfall bath—an invigorating way to cool down. 
              Amidst the pristine mountain landscape, the cascading waters offer a revitalizing escape, providing a refreshing respite 
              and an enjoyable break from the corporate hustle.
            </p>
          </div>
          <img src={over6} alt="Waterfalls" className="section-image" />
        </div>

        <div className="section">
          <img src={over7} alt="Campfire & Music" className="section-image" />
          <div>
            <h2>Campfire & Music</h2>
            <p>
              Experience the magic of Jawadhi Hills at our 'Starlit Beats and BBQ Retreat.' Dance under the stars, revel in good music, 
              and savor a barbecue party by the campfire. An unforgettable night awaits, where memories are made amid the warmth of the firelight.
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Itinerary content goes here.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Our Packages content goes here.
      </TabPanel>
      <TabPanel value={value} index={3}>
        Reviews content goes here.
      </TabPanel>
    </div>
  );
}
