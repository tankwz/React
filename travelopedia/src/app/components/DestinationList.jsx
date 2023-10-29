import React from 'react';
import {
  useGetAllDesQuery,
  useDeleteDesMutation,
} from '../../api/destinationApi';

function DestinationList() {
  const [deleteDes, result] = useDeleteDesMutation();
  const { data, isLoading, isSuccess, isError, error } = useGetAllDesQuery();
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map((des, index) => {
      return (
        <article key={index}>
          <div className="row">
            <div className="col-6 offset-3">
              <div className="text-center text-info p-2 border-bottom">
                <div>
                  {des.id} - City: {des.name}, day: {des.day}, Price:{' '}
                  {des.price}
                </div>
              </div>
            </div>

            <div className="col-1">
              <button
                className="btn btn-danger form-control"
                onClick={() => deleteDes(des.id)}
              >
                Delete
              </button>
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
