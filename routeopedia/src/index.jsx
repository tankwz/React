import React from 'react';
import ReactDOM from 'react-dom/client';
import './darkly.css';
import Header from './Components/Layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Layout/Home';
import About from './Components/Layout/About';
import CreateProduct from './Pages/CreateProduct';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import ProductList from './Pages/ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        {/* <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/product/create"
          element={<CreateProduct></CreateProduct>}
        ></Route>
        <Route
          path="/product/details"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/product/list"
          element={<ProductList></ProductList>}
        ></Route> */}
        <Route path="product">
          <Route path="" element={<Product></Product>}></Route>
          <Route
            path="create"
            element={<CreateProduct></CreateProduct>}
          ></Route>
          <Route
            path="details"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="list" element={<ProductList></ProductList>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
