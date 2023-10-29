import React from 'react';
import { useGetAllDesQuery } from '../../api/destinationApi';

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } = useGetAllDesQuery();
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map((des, index) => {
      return (
        <article key={index}>
          <div className="text-center text-info p-2 border-bottom">
            <div>
              {des.id} - City: {des.name}, day: {des.day}, Price: {des.price}
            </div>
          </div>
        </article>
      );
    });
  } else if (isError) {
    content = `Error: ${error}`;
  }
  return <div>{content}</div>;
}

export default DestinationList;
