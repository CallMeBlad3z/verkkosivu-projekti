import { useState } from "react";
import { useEffect } from "react";

export function ProductPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/products`)
            .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setProducts(data);
        });
}, []);

    return (
        <section>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.stock}</p>
                    <p>{product.manufacturer}</p>
                    <img src={product.image} alt="product" />
                </div>
            ))}
        </section>
    );
}