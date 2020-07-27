import React from 'react';
import { connect } from 'react-redux';

import './star-cart-table.css'
import { bookRemovedFromStar } from "../../actions";


const StarCartTable = ({items, onDelete}) => {

    const renderRow = (item, idx) => {
        const { code, name, brand, picture, total } = item;
        return (
            <tr key={code}>
                <td>{idx + 1}</td>
                <td> <img srcSet={picture}/> {name} <br /> <span>{brand}</span></td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDelete(code)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                </td>
            </tr>
        );
    };



  return (
      <div className="star-cart-table">
          <h2>Your Star</h2>
          <table className="table">
              <thead>
              <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Action</th>
              </tr>
              </thead>

              <tbody>
              { items.map(renderRow) }
              </tbody>
          </table>

      </div>
  );
};

const mapStateToProps = ({ starCart: { starItems }}) => {
    return {
        items: starItems,
    };
};

const mapDispatchToProps = {
    onDelete: bookRemovedFromStar
};




export default connect(mapStateToProps, mapDispatchToProps)(StarCartTable);