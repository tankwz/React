import React, { useState } from 'react';
import { useGetRandoDesQuery } from '../../api/randomDesApi';
import DestinationIndividual from './DestinationIndividual';

function AddRandomDes() {
  const { data2, isLoading2, isSuccess2, isError2, error2 } =
    useGetRandoDesQuery();
  const [content, setContent] = useState('');
  let dat;

  if (isLoading2) {
    dat = <p>Loading Random...</p>;
  } else if (isSuccess2) {
    let des = {
      id: data2.id,
      name: data2.city,
      day: Math.round(Math.random() * 10),
      price: Math.round(Math.random() * 20),
    };
    dat = ;
  } else if (isError2) {
    dat = `Error: ${error2}`;
  }

  return (
    <div>
      <button
        onClick={() => {
          setContent(content + dat);
        }}
      >
        Add Random Destination
      </button>
      <div>{content}</div>
    </div>
  );
}

export default AddRandomDes;
