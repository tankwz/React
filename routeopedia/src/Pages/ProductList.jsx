import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const nav = useNavigate();
  return (
    <div>
      <h4>ProductList</h4>
      <button
        className="btn btn-primary"
        onClick={() => nav('/product/create')}
      >
        Create Product
      </button>
    </div>
  );
}

export default ProductList;
