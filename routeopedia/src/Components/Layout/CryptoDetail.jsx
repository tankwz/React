import React from 'react';
import { useParams } from 'react-router-dom';

function CryptoDetail() {
  const { cryptoSymbol, day } = useParams();
  return (
    <div>
      <h4>CryptoDetail</h4>
      <p>Symbom: {cryptoSymbol}</p>
      <p>day: {day}</p>
    </div>
  );
}

export default CryptoDetail;
