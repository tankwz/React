import React from 'react';
import { useGetAllDesQuery } from '../../api/destinationApi';

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } = useGetAllDesQuery();
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = <p>success</p>;
  } else if (isError) {
    content = `Error: ${error}`;
  }
  return <div>{content}</div>;
}

export default DestinationList;
