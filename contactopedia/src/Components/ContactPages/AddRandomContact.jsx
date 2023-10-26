import { getRandomUser } from '../../Utility/api';

const GetRandomContact = async (props) => {
  const respond = await getRandomUser();
  console.log(respond);
  return props.handleRandomContact({
    name: respond.data.first_name + ' ' + respond.data.last_name,
    email: respond.data.email,
    phone: respond.data.phone_number,
  });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          GetRandomContact(props);
          //
        }}
        className="btn btn-info form-control "
      >
        Add Random Contact
      </button>
    </div>
  );
};
export default AddRandomContact;
