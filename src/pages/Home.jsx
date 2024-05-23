import SlickSlider from '../components/SlickSlider'
import { Link } from 'react-router-dom';
import SlickSliderProductCard from '../components/SlickSliderProductCard';
import Rectangle23 from '../assets/product-images/Rectangle23.png';
import VaraosatImg from '../assets/product-images/Varaosat.png'
import OutletImg from '../assets/product-images/Outlet.png'
import HuoltoImg from '../assets/product-images/Huolto.png'
import RahoitusImg from '../assets/product-images/Rahoitus.png'
import VarusteetImg from '../assets/product-images/Varusteet.png'
import ProductCategoryCard from '../components/ProductCategoryCard';

const categories = [
  { title: 'Polkupyörät', link: '/categories/1', imageUrl: Rectangle23 },
  { title: 'Varusteet', link: '/categories/2', imageUrl: VarusteetImg },
  { title: 'Outlet', link: '/categories/3', imageUrl: OutletImg },
  { title: 'Huolto', link: '/categories/4', imageUrl: HuoltoImg },
  { title: 'Varaosat', link: '/categories/5', imageUrl: VaraosatImg },
  { title: 'Rahoitus', link: '/categories/6', imageUrl: RahoitusImg },
];
const Home = ({products}) => {
  return (
    <div>
      <br />
      <SlickSlider />
      <div className="front-page-background-image">
        <br />
        <div className="product-card-carousel-container">
          <SlickSliderProductCard products={products} />
        </div>
        <div className="categories">
          {categories.map((category, index) => (
          <ProductCategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Home