import React from 'react';
import { useGetAllDesQuery } from '../../api/destinationApi';
import { useGetRandoDesQuery } from '../../api/randomDesApi';
import DestinationIndividual from './DestinationIndividual';
function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } = useGetAllDesQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((des, index) => {
      return (
        <DestinationIndividual key={index} des={des}></DestinationIndividual>
      );
    });
  } else if (isError) {
    content = `Error: ${error}`;
  }

  return <div>{content}</div>;
}

export default DestinationList;
