import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
{/* tähän kunkin tuoteryhmän testikuva + lisää sen categoriesdata lootaan tuotteen kohdalle */}

export default function CategoriesView() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3000/api/categories`)
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              setCategories(data.categories);
          });
  }, []);
  

  return (
    <div>
      {Array.isArray(categories) && categories.map((category, index) => (
        <div key={index}>
            <h1 key={category.title}>{category.title}</h1>
            <img href={category.image} alt={category.title} />
            <p>{category.description}</p>
            {Array.isArray(category.products) && category.products.map((product, index) => ( //WIP. Here should be displayed the products of the category
                <div key={index}>
                    <h2>{product.name}</h2>
                    <Link to={`/product/${product.name}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                </div>
            ))}
        </div>
    ))}
    </div>
);
}