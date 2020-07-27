import React, { Component } from 'react';
import BookListItem from '../book-list-item';

import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart, bookAddedToStar} from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({ books, onAddedToCart, onAddedToStar }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.code}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.code)}
                onAddedToStar={() => onAddedToStar(book.code)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};



class BookListContainer extends Component {

  search(items, term)  {

    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart, onAddedToStar, term } = this.props;
    const visibleItems = this.search(books, term);


    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={visibleItems} onAddedToCart={onAddedToCart} onAddedToStar={onAddedToStar} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error, term }}) => {
  return { books, loading, error, term };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
    onAddedToStar: (id) => dispatch(bookAddedToStar(id))
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
