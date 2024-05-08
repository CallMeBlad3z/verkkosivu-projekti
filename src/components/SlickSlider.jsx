import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import V1 from '../assets/V1.jpg'; 
import V2 from '../assets/V2.jpg';  
import V3 from '../assets/V3.jpg'; 

const SlickSlider = () => {
  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        <div>
  
        </div>
        <div>
        <img src={V1} alt="First slide" />
        </div>
        <div>
        <img src={V2} alt="Second slide" />
        </div>
        <div>
        <img src={V3} alt="Third slide" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;