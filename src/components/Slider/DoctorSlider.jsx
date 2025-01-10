import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s1 from "../../assets/slide-1.jpg";
import s2 from "../../assets/slide-2.jpg";
import s3 from "../../assets/slide-3.jpg";
import s4 from "../../assets/slide-4.jpg";

function DoctorSlider() {
  const images = [s1, s2, s3, s4]; // Store images in an array

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} alt={`Slide ${i + 1}`} />{" "}
          {/* Dynamically set image */}
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DoctorSlider;
