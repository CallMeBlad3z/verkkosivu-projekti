import SlickSlider from '../components/SlickSlider'
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Polkupyörät', link: '/categories/1' },
  { title: 'Varusteet', link: '/categories/2' },
  { title: 'Outlet', link: '/categories/3' },
  { title: 'Huolto', link: '/categories/4' },
  { title: 'Varaosat', link: '/categories/5' },
  { title: 'Rahoitus', link: '/categories/6' },
];

const Home = () => {
  return (
    <div>
      <br />
      <SlickSlider />
      <br /> <br />
    <div>
    <div className="categories">
    {categories.slice(0, 3).map((category, index) => (
      <Link key={index} to={category.link}>
        <div className="category-card">
          <img className="card-image" src="https://via.placeholder.com/150" alt="img" />
          <p className="card-title">{category.title}</p>
        </div>
      </Link>
    ))}
  </div>
  <div className="categories">
    {categories.slice(3).map((category, index) => (
      <Link key={index} to={category.link}>
        <div className="category-card">
          <img className="card-image" src="https://via.placeholder.com/150" alt="img" />
          <p className="card-title">{category.title}</p>
        </div>
      </Link>
    ))}
  </div>
 </div>
 </div>

  )
}

export default Home