import { useState } from 'react'

import { Provider } from 'react-redux'
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import { store } from './store';
 import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <Catalog />
        {/* <Cart /> */}
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App
