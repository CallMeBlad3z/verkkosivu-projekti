import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";

const SlickSliderProductCard = ({ products }) => {
	const settings = {
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		draggable: true,
		swipeToSlide: true,
		touchTreshold: 1,
		arrows: false,
	};

	//const numberOfProducts = products.length;

	return (
		<div>
			<Slider {...settings}>
					{products.map((p) => (
						<ProductCard key={p.productID} product={p} />
					))}
				
				{/*         {Array.from({ length: numberOfProducts }).map((_, index) => (
        <ProductCard key={index} />
        ))} */}
			</Slider>
		</div>
	);
};

export default SlickSliderProductCard;
