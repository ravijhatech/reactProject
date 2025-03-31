import React from "react";
import Slider from "react-slick";
import './Carousel.css';
import image1 from '../assets/image.png'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/images.jpg'

const Carousel = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="imagecard1">
          <img
            src={image1}
            alt="Slide 1"
            className="carousel-slide"
          />
        </div>
        <div className="imagecard2">
          <img
            src={image2}
            alt="Slide 2"
            className="carousel-slide"
          />
        </div>
        <div className="imagecard3">
          <img
            src={image3}
            alt="Slide 3"
            className="carousel-slide"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
