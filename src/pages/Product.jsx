import { useEffect, useState } from 'react';
{/* tähän kunkin tuoteryhmän testikuva + lisää sen categoriesdata lootaan tuotteen kohdalle */}

export default function ProductsView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3000/api/products`)
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              setProducts(data.products);
          });
  }, []);
  
  return (
    <div>
      {Array.isArray(products) && products.map((product, index) => (
        <div key={index}>
            <h1 key={product.title}>{product.title}</h1>
            <img href={product.image} alt={product.title} />
            <p>{product.description}</p>
        </div>
    ))}
    </div>
);
}