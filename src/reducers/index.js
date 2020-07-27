import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';
import updateStarCart from "./star-cart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    starCart: updateStarCart(state, action)

  };
};

export default reducer;
