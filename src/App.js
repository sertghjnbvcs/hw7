import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import store from './store';

const App = () => {
  return (
      <Provider store={store}>
        <Navbar />
        <ProductList />
      </Provider>
  );
};

export default App;
