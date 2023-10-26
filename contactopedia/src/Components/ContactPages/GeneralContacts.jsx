import ContactIndividual from './ContactIndividual';

const GeneralContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: '10px', backgroundColor: '#323637' }}
    >
      <div className="p-2">
        <div className="text-center h5 text-white-50">General</div>
        {props.contacts.map((item, index) => (
          <ContactIndividual
            contact={item}
            key={index}
            handleToggleFav={props.handleToggleFav}
            handleDeleteContact={props.handleDeleteContact}
          ></ContactIndividual>
        ))}
      </div>
    </div>
  );
};
export default GeneralContacts;
