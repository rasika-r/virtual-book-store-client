import React from 'react';
import '../css/cart.css';
import img from './book.jpg';

const Cart = () => {
  return (
    <div className="top">
      <div className="cart1">
        <div className="left-content">
          <img src={img} alt="Book" className="cart-image" />
          <div className="details">
            <span className="name">Book Name</span>
            <span className="rating">&#9733;&#9733;&#9733;&#9733;</span> {/* 4-star rating */}
            <p className="author">Author</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
