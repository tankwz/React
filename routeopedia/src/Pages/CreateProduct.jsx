import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
  const nav = useNavigate();
  return (
    <div>
      <h4>CreateProduct</h4>
      <button className="btn btn-primary" onClick={() => nav(-1)}>
        Bacc
      </button>{' '}
    </div>
  );
}

export default CreateProduct;
