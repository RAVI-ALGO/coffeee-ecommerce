import React from "react";
import "./cart-item.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const CartItem = (props) => {
  const navigate = useNavigate();
  const {
    name,
    currentPrice,
    originalPrice,
    discount,
    id,
    availableColor = [],
    imageFile = [],
  } = props.details;

  const handleRemove = (id) => {
    let cart = JSON.parse(localStorage.getItem("cartdata"))
   const newData =  cart.filter((item) =>item.id !== id)
   localStorage.setItem('cartdata',JSON.stringify(newData))
    navigate('/cart')
  }
  return (
    <div className="cart-item-body d-flex my-2">
      <div className="cart-item-thumnail">
        <img
          src={imageFile[0]}
          alt="item-image"
          className="cart-item-thumnail-image"
        />
      </div>
      <div className="cart-item-details mx-4">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-price">{currentPrice}</div>
        <div>Inclusive of all taxes</div>
      </div>
      <div className="item-quty">
        <label className="qnty-title my-auto mx-auto">Select Qty.</label>
        <Form.Select
          aria-label="Select quantity"
          className="quantity-option gap mx-auto"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </div>
      <div className="px-2">
        <label className="qnty-title my-auto ">Chose Color</label>
        <Form.Select
          aria-label="Select quantity"
          className="quantity-option gap w-100"
        >
          {availableColor.map((color, index) => {
            return <option key={index} value={color.colorName}>{color.colorName}</option>;
          })}
        </Form.Select>
      </div>
      <div className="remove-button-main">
        <button onClick={() => { handleRemove(id) }} className="btn remove-button pink-text ">Remove</button>
      </div>
    </div>
  );
};
export default CartItem;
