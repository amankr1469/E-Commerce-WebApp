import React, { useState, useEffect } from "react";
import Stars from "../../images/Star.png";
import "./Testimonial.css";
import Slider from 'react-slick';

function TestimonialCard() {
  const testimonials = [
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    { name: 'Carla Finch', content: 'I purchased a Long Sleeve Kimono out of my love of Japanese culture and it turned out really amazing.The delivery and tracking were also seamless.Absolutely love Elini! ', title: 'Vibrant Collection' },
    { name: 'Zahra Amin', content: 'My sister suggested Elini to me for my birthday outfit. Opted for one of their trendy jumpsuits and was not disappointed. 10 out of 10 - highly recommended.', title: 'Vibrant Collection' },
    // Add more testimonials
  ];
  const [slidesToShow, setSlidesToShow] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow, // Use the dynamic value here
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Function to update slidesToShow based on screen width
  const updateSlidesToShow = () => {
    if (window.innerWidth <= 600) {
      setSlidesToShow(1); // For smaller screens, show 1 slide at a time
    } else if (window.innerWidth <= 768) {
      setSlidesToShow(2); // For screens between 601px and 768px, show 2 slides at a time
    } else {
      setSlidesToShow(4); // For larger screens, show 4 slides at a time
    }
  };

  // Add an event listener to update slidesToShow on window resize
  useEffect(() => {
    updateSlidesToShow(); // Initial setting
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);


  return (
    <div className="testimonials-slider contain">
      <h2 className="sec-head">Customer's Love</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img className="stars" src={Stars} alt="RatingStart" />
            <h3 className="title">{testimonial.title}</h3>
            <p className="content">{testimonial.content}</p>
            <p className="name">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialCard;
