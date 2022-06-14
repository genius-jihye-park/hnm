import React from 'react'
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,  
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px"
  };
  return (
    <div>Main</div>
  )
}

export default Main