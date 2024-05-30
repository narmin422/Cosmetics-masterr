import React from 'react'
import '../About/About.css'
import Gallery from '../../components/Gallery/Gallery'
import {Link} from 'react-router-dom'
import UpIcon from '../../components/Up/UpIcon.jsx'
const About = () => {
  return (
    <div>
  <div className='about-info-photo'>
<p className='contact-p'>About</p>
        </div>

<div className='about-text-1'>
<div className="about-text">
  <p className='sparking-text'>
  SPARKING MEMORIES
  </p>
  <p className='font-cormor p-1-about-text'>
  Fragrance, the silent storyteller of personal allure.
  </p>
  <p className='join-us'>
  Join us on this aromatic voyage, where every spray tells a story and every note resonates with the essence of beauty. Luxury, artistry, and the sublime world of perfumery converge to create an unforgettable experience for the senses.
  </p>
  
    <Link to={{}}><button className='get-more-info'>Get More Info</button></Link>
</div>
<div className="about-1-img">
  <img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/man-doing-shopping.jpg" alt="" />
</div>

</div>


<Gallery/>

<div className='thesiz'>
<div className='thesis-text'>
  <p  className='font-cormor trend'>
  "The aesthetics of fashion play a pivotal role in shaping how we perceive ourselves and others, as well as influencing societal trends."
  </p>
</div>
</div>
<div className='count-section'>
  <div className="count-all w-80 font-cormor">
    <div className="type-count-1">
      <p className='count'>
      84
      </p>
      <p className='count-for'>

      Radiant Ranunculus
      </p>
    </div>
    <div className="type-count-1">
      <p className='count'>
      12
      </p>
      <p className='count-for'>

      Golden Gleam
      </p>
    </div>
    <div className="type-count-1">
      <p className='count'>
      67
      </p>
      <p className='count-for'>

      Hibiscus Bloom
      </p>
    </div>
    <div className="type-count-1">
      <p className='count'>
      12
      </p>
      <p className='count-for'>

      Starry Jasmine
      </p>
    </div>
  </div>
</div>
<UpIcon/>
    </div>
  )
}

export default About