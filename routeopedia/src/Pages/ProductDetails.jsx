import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="container mt-3">
      <h3>ProductDetails</h3>
      <div>
        <span>id: {id}</span>
      </div>
    </div>
  );
}

export default ProductDetails;
