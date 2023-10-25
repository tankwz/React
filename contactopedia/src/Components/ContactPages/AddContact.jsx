const AddContact = () => {
  return (
    <div className="border rounded  col-12 p-2">
      <div className="row">
        <div className="col-12 text-white-50">Add new Contact</div>
        <div className="col-12 col-md-4 p-1 ">
          <input type="form-control form-control-sm" placeholder="Name" />
        </div>
        <div className="col-12 col-md-4 p-1">
          <input type="form-control form-control-sm" placeholder="Email" />
        </div>
        <div className="col-12 col-md-4 p-1">
          <input type="form-control form-control-sm" placeholder="Phone" />
        </div>

        <div>
          <button className="btn btn-primary btn-sm form-control">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddContact;
