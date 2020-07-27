import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart, onAddedToStar}) => {
  const { code, name, brand, type, width, height, diametr, speed_index, load_index, thorn, runflat, season, price_recomend_rozn, picture, weight  } = book;
  return (
    <div className="book-list-item">
        <div className="book-star" onClick={onAddedToStar} >
            <i className="fa fa-heart"></i>
        </div>
      <div className="book-cover">
        <img src={picture} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{name}</span>
        <div className="book-author">{brand}</div>
          <div className="book-price"><span>{price_recomend_rozn}  <i className="fa fa-rub"></i></span>
        <button
            onClick={onAddedToCart}
            className="btn btn-success add-to-cart">
            В корзину
        </button></div>

      </div>
    </div>
  );
};

export default BookListItem;
