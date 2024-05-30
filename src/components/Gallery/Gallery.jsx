import React from 'react'
import '../Gallery/Gallery.css'
import {Link} from 'react-router-dom'
const Gallery = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <div>
        <div className="gallery-all w-100">
            <div className="gallery-photo name-info">
                <p className='font-cormor name'>Sarah Davy</p>
                <p>Administrative Assistant</p>
                <Link to={{}}> <button onClick={scrollToTop}>
                    Contact-me
                    </button>
                    </Link>
            </div>
            <div className="gallery-photo  gallery-photo-text ">
                <img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/beautiful-woman-with-long-curly-hair-enjoying-rose-fragrance-in-a-spring-garden.jpg" alt="" />
            </div>
            <div className="gallery-photo"><img src="https://images.kikocosmetics.com/mediaObject/2021/tutorial-how-to/evening-makeup/Prod_Editorial-Eveningmakeup_Banner-02/original/Prod_Editorial-Eveningmakeup_Banner-02.jpg" alt="" /></div>
            <div className="gallery-photo"><img src="https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//m/a/makeup-revolution-juicy-pout-lip-gloss-grapefruit-4-6ml_1.png" alt="" /></div>
            <div className="gallery-photo"><img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/cropped-shot-of-woman-holding-bottle-of-perfume.jpg" alt="" /></div>
            <div className="gallery-photo x"><img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/beautiful-girl-with-closed-eyes-and-a-flower-crown.jpg" alt="" /></div>
            <div className="gallery-photo"><img src="https://blogscdn.thehut.net/app/uploads/sites/2296/2020/04/Get-To-Know-The-Brand-Note-Cosmetics_1686219367.jpg" alt="" /></div>
            <div className="gallery-photo name-info">
                <p className='font-cormor name'>Emily Smit</p>
                <p>General Manger</p>
                <Link to={{}}> <button onClick={scrollToTop}>
                    Contact-me
                    </button>
                </Link>
               
            </div>
        </div>
    </div>
  )
}

export default Gallery