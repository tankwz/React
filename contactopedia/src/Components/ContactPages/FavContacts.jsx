import ContactIndividual from './ContactIndividual';

const FavContacts = (props) => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ContactIndividual contact={item} key={index}></ContactIndividual>
      ))}
    </div>
  );
};
export default FavContacts;
