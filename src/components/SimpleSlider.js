import React, { } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

    return (
      <Slider className="ps-slider" { ...settings }>
        <div className="ps-slide ps-first-slide">
          <h3 className="slide-title">PERTH SCAFFOLDING</h3>
          <p>Perth's Premier Scaffolding Company</p>
        </div>
        <div className="ps-slide ps-second-slide">
          <h3 className="slide-title">RESIDENTIAL SCAFFOLDING</h3>
          <p>We provide any solution you needy</p>
        </div>
        <div className="ps-slide ps-third-slide">
          <h3 className="slide-title">INDUSTRIAL SCAFFOLDING</h3>
          <p>No job too big or too small</p>
        </div>
      </Slider>
    );
  }
}