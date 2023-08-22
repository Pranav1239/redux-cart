import React from "react";
import '../styles/Media.css'
import { useSelector , useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productid)=>{
      dispatch(remove(productid))
  }

  return (
    <>
      <div className="container">
        <h1>Your Cart:</h1>
      </div>

      <div className="cartwrapper">
        {products.map((product) => (
          <div className="col-md-7" key={product.id}>
            <div className="card">
              <img src={product.image} alt="Hello" className="Photo-card" />
              <h2 className="headline">
                {product.title ? product.title.slice(0, 20) : product.title}
              </h2>
              <h2 className="price">₹{product.price}</h2>
              <button onClick={()=>handleRemove(product.id)} className="buy-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
