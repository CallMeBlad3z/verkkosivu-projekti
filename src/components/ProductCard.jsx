import V1 from '../assets/V1.jpg';
import { useNavigate } from "react-router-dom";

function ProductCard() {

    useNavigate();

    return (
        <div className="card">
        <img  className="card-image" src="https://via.placeholder.com/150" alt="img"></img>
         {/* jos haluaa kehityksen aikana käyttää kuvaa niin: <img className="card-image" src={V1} alt="img"></img>*/}
 
        <h2 className="card-title">Title </h2>
        <p className="card-text">price </p>
        <p className="card-text">description </p>
        <p className="card-text">stock </p>
        <p className="card-text">manufacturer </p>

        <div className="card_button">
        <button
          className="btn btn-primary col card-button"
          onClick={() => navigate(`/singleProductView/${p.slug}`)}
          >
          View Product
        </button>

        <button
          className="btn btn-outline-primary col card-button"
          onClick={() => {
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([...cart, p]));
            toast.success("Added to cart");
          }}
        >
          Add to Cart
        </button>
        </div>
  
  
         {/* kun tietokanta kytketty yms, product voisi olla suurinpiirtein tällainen: 
         
         <img
            className="card-image"
            src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
            alt={p.name}
          /> 
 
        <h2 className="card-title">Title {p?.title}</h2>
        <p className="card-text">price {p?.price?.toLocaleString("en-EU", {
            style: "currency",
            currency: "EUR",  
        })}</p>
        <p className="card-text">description {p?.description?.substring(0, 60)}</p>
        <p className="card-text">stock {`${
            p?.quantity >= 1
              ? `${p?.quantity - p?.sold} in stock`
              : "Out of stock"
          }`}</p>
        <p className="card-text">manufacturer {p?.manufacturer}</p>

        <div className="card_button">
        <button
          className="btn btn-primary col card-button"
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          View Product
        </button>

        <button
          className="btn btn-outline-primary col card-button"
          onClick={() => {
            setCart([...cart, p]);
            localStorage.setItem("cart", JSON.stringify([...cart, p]));
            toast.success("Added to cart");
          }}
        >
          Add to Cart
        </button>
        </div>*/}

        </div>
      );
    }

    export default ProductCard;

