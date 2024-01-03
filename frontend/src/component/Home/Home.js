import "./Home.css";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import Cards from "../../component/Cards/Cards.js";
import Subscribe from "../../component/Subscribe/Subscribe.js";
import Catcircle from '../../component/Catcircle/Catcircle.js';
import v1 from "../../images/img1.jpg";
import v2 from "../../images/img1.jpg";
import v3 from "../../images/img1.jpg";
import v4 from "../../images/img1.jpg";
import TestimonialCard from "../../component/TestimonialCard/Testimonial.js";

const Home = () => {

  return (
    <div className='homePage'>
      <section className='dress-cat contain'>
        <Catcircle />
      </section>

      <section className='ch-elini contain contain-bg'>
        <h2 className='sec-head sec-head-ul'>
          Laxmi Cheet Fund
        </h2>
        <p className='sec-para'>
        From streetwear staples to chic statement pieces, 
        our curated collection celebrates diversity,
        inclusivity, and self-expression. 
        Embrace your unique style with our sustainable, 
        high-quality garments designed to empower and inspire the next generation of fashion enthusiasts. 
        Join the movement and redefine fashion with Laxmi Cheet Fund.
        </p>
      </section>

      {/* Fashion gallery  */}
      <section className='home-gallery contain'>
        <div className='upper-gallery'>
          <div className='gallery-card1'>
            <div className='image-container'>
              <img src={img1} alt="HomeGallery" />
              <div className='overlay'>
                <p>ORDER NOW</p>
                <h2>On Discount</h2>
              </div>
            </div>
          </div>
          <div className='gallery-card2'>
            <div className='image-container'>
              <img src={img2} alt="HomeGallery" />
              <div className='overlay'>
                <p>FRESHLY CRAFTED</p>
                <h2>Latest Arrivals</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='lower-gallery'>
          <div className='gallery-card2'>
            <div className='image-container'>
              <img src={img3} alt="HomeGallery" />
              <div className='overlay'>
                <p>DAZZLE IT UP</p>
                <h2>Best Sellers</h2>
              </div>
            </div>
          </div>
          <div className='gallery-card1'>
            <div className='image-container'>
              <img src={img4} alt="HomeGallery" />
              <div className='overlay'>
                <p>JUST FOR YOU</p>
                <h2>First Time On Sale</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Slider  */}
      <section className="product-slider contain  contain-bg">
        <div className="slider-heading">
          <h2 className='sec-head'>Forever Clothing</h2>
          <p className='sec-para'>Trousseau must-haves we're currently loving</p>
        </div>
        <Cards />
      </section>

      <div className=" detailsection contain contain-bg">
        <div className="item">
          <img src={v1} alt="v1" />
          <p className='heading-section'>Free delivery</p >
          <p>on orders above ₹999</p>
        </div>
        <div className="divider"></div>
        <div className="item">
          <img src={v2} alt="v2" />
          <p className='heading-section'>Delivery on time</p >
          <p>Lorem Ipsum lorem ipsum de color</p>
        </div>
        <div className="divider"></div>
        <div className="item">
          <img src={v3} alt="v3" />
          <p className='heading-section'>Secure payment</p >
          <p>100% secure payment assurity</p>
        </div>
        <div className="divider"></div>
        <div className="item">
          <img src={v4} alt="v4" />
          <p className='heading-section'>Online support</p >
          <p>Online support 24/7</p>
        </div>
      </div>
      <TestimonialCard />
      <Subscribe />
    </div >
  );
};


export default Home;