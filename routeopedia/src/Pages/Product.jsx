import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Product() {
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });
  const nav = useNavigate();
  return (
    <div>
      <h4>Product</h4>
      <button
        className="btn btn-primary ms-5"
        onClick={() => {
          nav('/product/create');
        }}
      >
        Add Product
      </button>

      <Link to={'/product/details'}>
        {' '}
        <button type="button" className="btn btn-primary ms-5">
          Product Detail
        </button>
      </Link>
      <Link to={'/product/details/23'}>
        {' '}
        <button type="button" className="btn btn-primary ms-5">
          Product Detail 23
        </button>
      </Link>
      {goToProduct && <Navigate to={'/product/details/2'}></Navigate>}
      <button
        onClick={() => {
          setGoToProduct(() => true);
        }}
        type="button"
        className="btn btn-primary ms-5"
      >
        Product Detail 23
      </button>
    </div>
  );
}

export default Product;
