import React from 'react';
import "./Cards.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/image-box1.jpg';
import img2 from '../../images/image-box2.jpg';
import img3 from '../../images/image-box3.jpg';
import img4 from '../../images/image-box4.jpg';
import img5 from '../../images/image-box5.jpg';
import img6 from '../../images/image-box6.jpg';

const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Aesthetics',
        image: img1,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Glamour',
        image: img2,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Ravishing',
        image: img3,
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'Ethical',
        image: img4,
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'Saree',
        image: img5,
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'Whatever',
        image: img6,
    },
];

function Cards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}  <br></br><hr style={{
                            color: '#FFFFFF',
                            backgroundColor: '#FFFFFF',
                            height: 2.5,
                            width: 60,
                            padding: 1,
                            // border: faBorderNone,
                            gap: 10,
                        }}></hr> {product.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Cards;
