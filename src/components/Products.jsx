import React, { useState, useEffect } from "react";
import "../styles/Product.css";
import '../styles/Media.css'
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Product = () => {
  const dispath = useDispatch();

  const [product, SetProduct] = useState([]);

  useEffect(() => {
    const AllProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      SetProduct(data);
    };
    AllProducts();
  }, []);


  const handleAdd = (product)=>{
    dispath(add(product))
  }


  return (
    <>
      <div className="container my-5">
        <h1>Products</h1>
      </div>

      <div className="container">
        <div className="row">
          {product.map((product) => (
            <div className="col-md-3"  key={product.id}>
              <div className="card">
                <img src={product.image} alt="Hello" className="Photo-card"/>
                <h2 className="headline">{product.title?product.title.slice(0 , 20):product.title}</h2>
                <p className="description">{product.description?product.title.slice(0 , 75):product.description}</p>
                <h2 className="price">${product.price}</h2>
                <button onClick={()=> handleAdd(product)} className="buy-btn">Add to cart</button>
                </div>
                </div>
          ))}
        </div>
        </div>
    </>
  );
};

export default Product;
