import React from 'react';
import { Route } from 'react-router-dom';


import { Header } from './componets';
import { Main, Cart } from './pages';


function App({ items }) {


  return (
    < div className="wrapper" >

      <Header />
      <div>
        <Route path="/" component={Main} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div >
  )
}

export default App;
