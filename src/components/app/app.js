import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage, StarePages } from '../pages';

import './app.css';

function outside(e) {
    const block2 = document.querySelector(".shopping-cart-hover");
    const block3 = document.querySelector(".shopping-cart");
    const target = e.target;
    let flag = target.closest('.shopping-cart');

    if (flag === block3) {
        block2.classList.add('hide');
    } else {
        block2.classList.remove('hide');
    }

}


const App = () => {
  return (
    <main role="main" className="container" onClick={outside}>
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/order"
          component={CartPage}
          />
          <Route
              path="/star"
              component={StarePages}
          />
      </Switch>
    </main>
  );
};

export default App;
