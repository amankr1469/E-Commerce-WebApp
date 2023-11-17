import React, { Fragment, useEffect, useState } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.scss";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import Cards from "../../component/Cards/Cards.js";
import Subscribe from "../../component/Subscribe/Subscribe.js";
import Catcircle from '../../component/Catcircle/Catcircle.js';
// import ProductCardPrice from '../../component/ProductCardPrice/ProductCardPrice.js';
import v1 from "../../images/img1.jpg";
import v2 from "../../images/img1.jpg";
import v3 from "../../images/img1.jpg";
import v4 from "../../images/img1.jpg";
import TestimonialCard from "../../component/TestimonialCard/Testimonial.js";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All'); // Initialize with 'All' as the default category

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className='homePage'>
      <section className='dress-cat contain'>
        <Catcircle />
      </section>

      {/* Choosing Elini! */}
      <section className='ch-elini contain contain-bg'>
        <h2 className='sec-head sec-head-ul'>
          Choosing Elini!
        </h2>
        <p className='sec-para'>
          Elini is a luxury brand which was born in the India, a land symbolizing opulence and exceptional
          class. We produce fashion items using original craftsmanship, vibrant prints, and out-of-the-
          ordinary meticulousness. The label was founded by Lila Achimu and is driven by her love and
          passion for both Japanese and Oriental art and culture. Kimaya introduces to the market an array
          of unique designs, for the elegant woman seeking the extraordinary!
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

      <section className='contain contain-bg product-wrapper'>
        <div className='pr-wrapper-header'>
          <h2 className='sec-head'>Popular Styles</h2>
          <p className='sec-para'>View all</p>
        </div>
        <div className='pr-wrapper-btnbox'>
          <div
            className={`pr-btn ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </div>
          <div
            className={`pr-btn ${activeCategory === 'Kurti' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Kurti')}
          >
            Kurti
          </div>
          <div
            className={`pr-btn ${activeCategory === 'Sharara' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Sharara')}
          >
            Sharara
          </div>
          <div
            className={`pr-btn ${activeCategory === 'Suit' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('Suit')}
          >
            Suit
          </div>
        </div>
        {/* Render your content based on the activeCategory */}
        {renderContentBasedOnCategory(activeCategory)}
        {/* <ProductCardPrice /> */}
      </section >

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

function renderContentBasedOnCategory(activeCategory) {
  // Implement your logic to filter and display content based on the active category.
  // You can conditionally render different components or items here.

  if (activeCategory === 'All') {
    return <div>All Products</div>;
  } else if (activeCategory === 'Kurti') {
    return <div>Kurti Products</div>;
  } else if (activeCategory === 'Sharara') {
    return <div>Sharara Products</div>;
  } else if (activeCategory === 'Suit') {
    return <div>Suit Products</div>;
  }
}


export default Home;