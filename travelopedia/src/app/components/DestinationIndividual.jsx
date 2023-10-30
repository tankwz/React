import React, { useState } from 'react';
import {
  useDeleteDesMutation,
  useUpdateDesMutation,
} from '../../api/destinationApi';
function DestinationIndividual({ des }) {
  const [deleteDes, resultDelete] = useDeleteDesMutation();
  const [updateDes, resultUpdate] = useUpdateDesMutation();
  const [editing, editEditing] = useState(() => false);
  const [city, editCity] = useState(() => des.name);
  const [id, editId] = useState(() => des.id);

  const [day, editDay] = useState(() => des.day);
  const [price, editPrice] = useState(() => des.price);
  const handleEdit = () => {
    if (editing) {
      updateDes({
        id: id,
        name: city,
        day: day,
        price: price,
      });
      console.log(editing);
      editEditing(false);
      console.log(editing);
    } else editEditing(true);
  };
  return (
    <article>
      <div className="row mt-2">
        <div className="col-6 offset-3">
          <div className="text-center text-info p-2 border-bottom">
            <div className="row">
              {!editing ? (
                <div className="col-12">
                  {des.id} - City: {des.name}, day: {des.day}, Price:{' '}
                  {des.price}
                </div>
              ) : (
                <div className="col-12">
                  <div className="row">
                    <div className="col-4">
                      <input
                        className="form-control-sm"
                        placeholder="City..."
                        value={city}
                        onChange={(e) => {
                          editCity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        className="form-control-sm"
                        type=""
                        name=""
                        id=""
                        placeholder="Day..."
                        value={day}
                        onChange={(e) => {
                          editDay(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        className="form-control-sm"
                        type=""
                        name=""
                        id=""
                        placeholder="Price..."
                        value={price}
                        onChange={(e) => {
                          editPrice(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-4">
                      <input
                        className="form-control-sm"
                        type=""
                        name=""
                        id=""
                        placeholder="Day..."
                        value={id}
                        hidden
                        onChange={(e) => {
                          editId(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-1">
          <button className="btn btn-info form-control" onClick={handleEdit}>
            {editing ? 'Update' : 'Edit'}
          </button>
        </div>
        {editing && (
          <div className="col-1">
            <button
              className="btn btn-secondary form-control"
              onClick={() => editEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
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
}

export default DestinationIndividual;
