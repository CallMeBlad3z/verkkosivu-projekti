import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel_1 from '../assets/product-images/Carousel_1.png'; 
import Carousel_2 from '../assets/product-images/Carousel_2.png';  
import Carousel_3 from '../assets/product-images/Carousel_3_Onni_Niilo.png'; 

const SlickSlider = () => {
  const settings = {
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1900,
    arrows:false
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="front-page-carousel-image">
          <img src={Carousel_1} alt="First slide" />
          <div className="slide-over-text">
          <p>Tervetuloa verkkokauppaamme! Tarjoamme laajan valikoiman korkealaatuisia tuotteita, jotka on huolellisesti valittu vastaamaan tarpeitasi. Etsitpä sitten uusimpia teknisiä laitteita, tyylikkäitä kodin sisustustarvikkeita tai ainutlaatuisia lahjoja, löydät ne täältä. Sitoutumisemme asiakaspalveluun ja tyytyväisyyteen takaa saumattoman ostokokemuksen. Aloita kokoelmamme tutkiminen jo tänään!</p>
          </div>
        </div>
        <div className="front-page-carousel-image">
          <img src={Carousel_2} alt="Second slide" />
        </div>
        <div className="front-page-carousel-image">
          <img src={Carousel_3} alt="Third slide" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;