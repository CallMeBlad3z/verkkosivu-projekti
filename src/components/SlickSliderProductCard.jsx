import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";

export default function SlickSliderProductCard({products}) {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    touchTreshold: 1,
    arrows:false
  };

  return (
    <div>
      <Slider {...settings}>
        {products.map((p) => (
          <ProductCard key={p.productID} product={p} />
        ))}
      </Slider>
    </div>
  );
};