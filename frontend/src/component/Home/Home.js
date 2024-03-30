import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
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

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <div className='homePage'>

<section className='ch contain contain-bg'>
<button>
  <span>LCF</span>
</button>
  <p className='sec-para'>
  From streetwear staples to chic statement pieces, 
  our curated collection celebrates diversity,
  inclusivity, and self-expression. 
  Embrace your unique style with our sustainable, 
  high-quality garments designed to empower and inspire the next generation of fashion enthusiasts. 
  Join the movement and redefine fashion with LCF.
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
</div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
