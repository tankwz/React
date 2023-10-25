const ContactIndividual = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <ul className="list-group list-group-horizontal  ">
          <li className="list-group-item ">{props.contact.name}</li>
          <li className="list-group-item">{props.contact.phone}</li>
          <li className="list-group-item">
            {props.contact.isFav == true ? 'is Fav' : 'Not Fav'}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactIndividual;
