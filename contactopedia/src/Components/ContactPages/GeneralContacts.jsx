import ContactIndividual from './ContactIndividual';

const GeneralContacts = (props) => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ContactIndividual contact={item} key={index}></ContactIndividual>
      ))}
    </div>
  );
};
export default GeneralContacts;
