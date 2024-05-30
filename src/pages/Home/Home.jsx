import React from 'react';
import './Home.css'; 
import video1 from '../../assets/video-1.mp4';
import sliderImg2 from '../../assets/Be-Beauty-4.png';
import sliderImg1 from '../../assets/poster1.jpg';
import MiniBlog from '../../components/Mini-blog/MiniBlog'
import Gallery from '../../components/Gallery/Gallery'
import UpIcon from '../../components/Up/UpIcon.jsx'
const Home = () => {
  return (
    <div>
      <div className='home-video'>
        <video className='video-player' controls autoPlay>
          <source src={video1} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='mini-about'>
        <div className='about-content w-80'>
          <div className='image-container'>
            <img src={sliderImg1} className='image' alt="About" />
          </div>
          <div className='text-container w-40'>
            <h3 className='quote font-cormor' >"The joy of dressing is an art."</h3>
            <p className='description'>Fashion is an art that shapes our lifestyle and reflects our personal expression. Our style serves as a reflection of our emotions and thoughts, showcasing our uniqueness. Our choice of attire acts as a language to introduce ourselves to the external world. Each garment is a part of expressing ourselves and a testament to the confidence we hold within.</p>
          </div>
        </div>
      </div>
      <div className="line">
        <img src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-nyxcosmetics-us-Library/en_US/dw999fc80d/homepage/DMI-HPv2-Manifesto-Desktop-1920x320.png?sw=2000&sh=333&sm=fit" alt="" />
      </div>
<div className='mini-b'>
<MiniBlog/>
</div>

<div className='mini-about'>
        <div className='about-content w-80'>
          
          <div className='text-container w-40'>
            <h3 className='quote font-cormor' >  Catering to your requirements, handling your needs with care.</h3>
            <p className='description'>Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience.
</p>
          </div>
          <div className='image-container'>
            <img src='https://cdn.create.vista.com/api/media/small/183512182/stock-photo-spring' className='image' alt="About" />
          </div>
        </div>
      </div>
      <div className="mini-b">
  <Gallery/>
</div>
<UpIcon />
    </div>
  );
}

export default Home;
