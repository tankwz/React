const ContactIndividual = (props) => {
  return (
    <div className="row mb-2 border  border-1 rounded-2 px-2 py-1 ">
      {/* <div className="col-12">
        <ul className="list-group list-group-horizontal  ">
          <li className="list-group-item ">{props.contact.name}</li>
          <li className="list-group-item">{props.contact.phone}</li>
          <li className="list-group-item">
            {props.contact.isFav == true ? 'is Fav' : 'Not Fav'}
          </li>
        </ul>
      </div> */}
      <div className="col-2 pt-2 pt-md-1 col-md-1">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
          // className="w-75"
          style={{ width: '75%' }}
          alt=""
        />
      </div>
      <div className="col-6">
        <span className="h4">{props.contact.name}</span>
        <div className="">
          {props.contact.email}
          <br />
          {props.contact.phone}
        </div>
      </div>
      <div className="col-2 col-md-2 pt-md-3 ">
        <button
          onClick={() => {
            props.handleToggleFav(props.contact);
          }}
          className={`btn btn-sm border  m-1 ${
            props.contact.isFav ? 'btn-info' : 'btn-outline-dark '
          } `}
        >
          <i className="bi bi-star" style={{ fontSize: '1rem' }}></i>
        </button>
      </div>
      <div className="col-2 col-md-2 pt-md-3 ">
        <button className={`btn btn-sm border  m-1 btn-primary`}>
          <i className="bi bi-pencil-square" style={{ fontSize: '1rem' }}></i>
        </button>
        <button
          onClick={() => {
            props.handleDeleteContact(props.contact.id);
          }}
          className={`btn btn-sm border  m-1 btn-danger`}
        >
          <i className="bi bi-trash3" style={{ fontSize: '1rem' }}></i>
        </button>
      </div>
      <div className="col-2 col-md-2 pt-md-3 "></div>
    </div>
  );
};

export default ContactIndividual;
