import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Rectangle23 from '../assets/product-images/Rectangle23.png';
import Rectangle66 from '../assets/product-images/Rectangle66.png';
{/* tähän kunkin tuoteryhmän testikuva + lisää sen categoriesdata lootaan tuotteen kohdalle */}

const categoriesData = [
    {
      id: '1',
      title: 'Polkupyörät',
      image: Rectangle23,
      products: [
        { name: 'Polkupyörä 1', image: Rectangle66, description: 'Kuvaus 1', price: 'Hinta 1'},
        { name: 'Polkupyörä 2', image: Rectangle66, description: 'Kuvaus 2',  price: 'Hinta 2'},
        { name: 'Polkupyörä 3', image: Rectangle66, description: 'Kuvaus 3',  price: 'Hinta 3'},
      ],
    },
    {
      id: '2',
      title: 'Varusteet',
      image: Rectangle66,
      products: [
        { name: 'Varusteet 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1'},
        { name: 'Varusteet 2', image: Rectangle23, description: 'Kuvaus 2',  price: 'Hinta 2'},
        { name: 'Varusteet 3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3'},
      ],
    },
    {
        id: '3',
        title: 'Outlet',
        image: Rectangle66,
        products: [
          { name: 'Outlet 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1'},
          { name: ' Outlet2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2'},
          { name: ' Outlet3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3'},
        ],
      },
      {
        id: '4',
        title: 'Huolto',
        image: Rectangle66,
        products: [
          { name: 'Huolto 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1'},
          { name: 'Huolto 2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2'},
          { name: 'Huolto 3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3'},
        ],
      },
      {
        id: '5',
        title: 'Varaosat',
        image: Rectangle66,
        products: [
          { name: ' Varaosat1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1'},
          { name: ' Varaosat2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2'},
          { name: ' Varaosat3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3'},
        ],
      },
      {
        id: '6',
        title: 'Rahoitus',
        image: Rectangle66,
        products: [
          { name: 'Rahoitus 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1'},
          { name: 'Rahoitus2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2'},
          { name: 'Rahoitus3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3'},
        ],
      },
  ];

const CategoriesView = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const category = categoriesData.find((category) => category.id === id);
    setCategory(category);
  }, [id]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{category.title}</h1>
      <img src={category.image} alt={category.title} />
      {category.products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <Link to={`/product/${product.name}`}>
          <img src={product.image} alt={product.name} />
          </Link>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button
        className="card-button"
        onClick={() => {
          setCart([...cart, p]);
          localStorage.setItem("cart", JSON.stringify([...cart, p]));
          toast.success("Added to cart");
        }}
      >
        Add to Cart
      </button>
        </div>
      ))}
    </div>
  );
};

export default CategoriesView;