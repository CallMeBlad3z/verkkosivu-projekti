import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// <<<<<<< HEAD
// import Rectangle23 from '../assets/product-images/Rectangle23.png';
// import Rectangle55 from '../assets/product-images/Rectangle55.png';
// import Rectangle66 from '../assets/product-images/Rectangle66.png';
// {/* tähän kunkin tuoteryhmän testikuva + lisää sen categoriesdata lootaan tuotteen kohdalle */}

// const categoriesData = [
//     {
//       id: '1',
//       title: 'Polkupyörät',
//       image: Rectangle55,
//       products: [
//         { name: 'Polkupyörä 1', image: Rectangle66, description: 'Kuvaus 1', price: 'Hinta 1', star: 1},
//         { name: 'Polkupyörä 2', image: Rectangle66, description: 'Kuvaus 2',  price: 'Hinta 2', star: 2},
//         { name: 'Polkupyörä 3', image: Rectangle66, description: 'Kuvaus 3',  price: 'Hinta 3', star: 4},
//       ],
//     },
//     {
//       id: '2',
//       title: 'Varusteet',
//       image: Rectangle66,
//       products: [
//         { name: 'Varusteet 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1', star: 1},
//         { name: 'Varusteet 2', image: Rectangle23, description: 'Kuvaus 2',  price: 'Hinta 2', star: 2},
//         { name: 'Varusteet 3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3', star: 4},
//       ],
//     },
//     {
//         id: '3',
//         title: 'Outlet',
//         image: Rectangle66,
//         products: [
//           { name: 'Outlet 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1', star: 1},
//           { name: ' Outlet2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2', star: 2},
//           { name: ' Outlet3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3', star: 4},
//         ],
//       },
//       {
//         id: '4',
//         title: 'Huolto',
//         image: Rectangle66,
//         products: [
//           { name: 'Huolto 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1', star: 1},
//           { name: 'Huolto 2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2', star: 2},
//           { name: 'Huolto 3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3', star: 4},
//         ],
//       },
//       {
//         id: '5',
//         title: 'Varaosat',
//         image: Rectangle66,
//         products: [
//           { name: ' Varaosat1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1', star: 1},
//           { name: ' Varaosat2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2', star: 2},
//           { name: ' Varaosat3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3', star: 4},
//         ],
//       },
//       {
//         id: '6',
//         title: 'Rahoitus',
//         image: Rectangle66,
//         products: [
//           { name: 'Rahoitus 1', image: Rectangle23, description: 'Kuvaus 1', price: 'Hinta 1', star: 1},
//           { name: 'Rahoitus2', image: Rectangle23, description: 'Kuvaus 2', price: 'Hinta 2', star: 2},
//           { name: 'Rahoitus3', image: Rectangle23, description: 'Kuvaus 3', price: 'Hinta 3', star: 4},
//         ],
//       },
//   ];

// const CategoriesView = () => {
//   const { id } = useParams();
//   const [category, setCategory] = useState(null);
// =======
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
// <<<<<<< HEAD
//     <div className="containerCate">
//       <div className="headerCate">
//         <div class="text-sectionCate">
//           <h1 className="headertitleCate">{category.title}</h1>
//           <p>Pyöräily on elämäntapa, jonka kylkiäisenä torjutaan ilmastonmuutosta sekä kuntoillaan! Valikoimassamme on sähköpyöriä, maastopyöriä, gravelpyöriä, kaupunkipyöriä, läskipyöriä, hybridipyöriä ja lasten pyöriä sekä tietenkin pyöräilytarvikkeita.</p>
//         </div>
//         <div class="image-sectionCate">
//           <img src={category.image} alt={category.title} className="categoryImageCate" />
//         </div>
//       </div>
//       <div className="productListCate">
//         {category.products.map((product, index) => (
//           <div className="productCardCate" key={index}>
//               <Link to={`/product/${product.name}`}>
//                 <img src={product.image} alt={product.name} className="productImageCate" />
//               </Link>
//             <h2 className="productNameCate">{product.name}</h2>
//             <p className="productDescriptionCate">{product.description}</p>
//             <StarRating rating={product.star} />
//             <p className="priceCate">{product.price}</p>
//             <button
//               className="addToCartButtonCate"
//               onClick={() => {
//                 setCart([...cart, product]);
//                 localStorage.setItem("cart", JSON.stringify([...cart, product]));
//                 toast.success("Added to cart");
//               }}
//             >
//               Lisää koriin
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const StarRating = ({ rating }) => {
//   return (
//     <p className="starCate">
//       {Array.from({ length: 5 }, (v, i) => (
//         <span key={i} className={i < rating ? "black-star" : ""}>★</span>
//       ))}
//     </p>
//   );
// };

// export default CategoriesView;
// =======
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

