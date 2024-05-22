import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";

const SlickSliderProductCard = () => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    touchTreshold: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
        <div>
        <ProductCard />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSliderProductCard;