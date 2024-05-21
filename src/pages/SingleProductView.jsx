import { useParams } from 'react-router-dom';
   
   const SingleProductView = () => {
    const { productName } = useParams();
    // Fetch product data based on productName
     return (
      <div className="single-card">
      <img  className="card-image" src="https://via.placeholder.com/150" alt="img"></img>
       {/* jos haluaa kehityksen aikana käyttää kuvaa niin: <img className="card-image" src={V1} alt="img"></img>*/}
      <h2 className="card-title">Title </h2>
      <p className="card-text">price </p>
      <p className="card-text">description </p>
      <p className="card-text">stock </p>
      <p className="card-text">manufacturer </p>

      <div className="card_button">

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
      </div>
     )
   }
   
   export default SingleProductView
   
   
                               