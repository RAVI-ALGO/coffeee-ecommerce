import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

const Product = (props) => {
  const navigate = useNavigate();
  const {imageFile, name, currentPrice, originalPrice, offer, emi, discount ,id, } =
    props.productData;

    const gotoProdutDetailsPage = () =>{
      const Pname =name.replaceAll(" ","-");
      navigate(`/products/${Pname}/${id}`);
    }

  return (
    <div className="product" onClick={gotoProdutDetailsPage}>
      <div className="img-main">
        <img
          src={imageFile[0]}
          alt="phone"
          className="img-fluid product-img my-auto"
        />
      </div>
      <div className="product-offer">{offer}</div>
      <div className="product-name">{name}</div>
      <div className="product-prices">
        <div className="fs-5">{currentPrice}</div>
        <div className="original-price">{originalPrice}</div>
        <div className="discount">{discount}</div>
      </div>
      <div className="emi">{emi}</div>
      
    </div>
  );
};

export default Product;
