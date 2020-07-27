import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {allBooksRemovedFromCart, bookAddedToCart, bookRemovedFromCart, searchBookHeader} from "../../actions";



function dropdown() {
   document.querySelector(".shopping-cart-hover").classList.toggle('hide')
}


const ShopHeader = ({ items, total, totalStar = 0, onIncrease, onDecrease, onDelete, onSearch, term }) => {

    const renderRow = (item, idx) => {
        const { code, name, brand, count, total } = item;
        return (
            <tr key={code} className="shop-header-item" >
                <td>{idx + 1}</td>
                <td> {name} <br /> <span>{brand}</span></td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDelete(code)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncrease(code)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(code)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    };

    const search = (e) => {
        onSearch(e.target.value);
    };


  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">автошина.рус</div>
      </Link>
      <input className="form-control" onChange={(e) => search(e)}/>
        <div className="shopping-cart" >
          <i className="cart-icon fa fa-shopping-cart" />
         <button className='btn btn-danger' > {items.length} items (${total}) </button>
            <div className="shopping-cart-hover">
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    { items.map(renderRow) }
                    </tbody>
                </table>

                <div className="total">
                    Total: ${total}
                    <Link to="/order">
                    <button className="btn btn-success">В корзину</button>
                </Link>
                </div>
            </div>
        </div>

        <Link to="/star">
        <div>
            <i className="fa fa-heart"></i> {totalStar}
        </div>
        </Link>
        <Link to={"/cabinet"} >
            <i className="fa fa-user"></i>
        </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }, starCart: { starItems }, bookList: { term } } ) => {
    return {
        items: cartItems,
        total: orderTotal,
        totalStar: starItems.length,
        term: term
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
    onSearch: searchBookHeader
};


export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
