import React from 'react';
import Header from '../Layout/Header';
import AddRandomContact from './AddRandomContact';
import RemoveAllContact from './RemoveAllContact';
import AddContact from './AddContact';
import FavContacts from './FavContacts';
import GeneralContacts from './GeneralContacts';
import Footer from '../Layout/Footer';
class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: 'Ben Parker',
          phone: '666-666-7770',
          email: 'ben@gmail.com',
          isFav: false,
        },
        {
          id: 2,
          name: 'Katy Patrick',
          phone: '111-222-0000',
          email: 'kathy@gmail.com',
          isFav: true,
        },
        {
          id: 3,
          name: 'Paul Show',
          phone: '999-222-1111',
          email: 'paul@gmail.com',
          isFav: true,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: '85vh' }}>
          <div className="row">
            <div className="col-4 offset-2 ">
              <AddRandomContact></AddRandomContact>
            </div>
            <div className="col-4">
              <RemoveAllContact></RemoveAllContact>
            </div>{' '}
            <div className="row py-2 justify-content-center  text-center">
              <AddContact></AddContact>
            </div>{' '}
            <div className="row py-2">
              <FavContacts
                contacts={this.state.contactList.filter((a) => a.isFav == true)}
              ></FavContacts>
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (a) => a.isFav == false
                )}
              ></GeneralContacts>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ContactIndex;
