import React from 'react';
import Header from '../Layout/Header';
import AddRandomContact from './AddRandomContact';
import RemoveAllContact from './RemoveAllContact';
import AddContact from './AddContact';
import FavContacts from './FavContacts';
import GeneralContacts from './GeneralContacts';
import Footer from '../Layout/Footer';
class ContactIndex extends React.Component {
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
            <div className="row py-2">
              <AddContact></AddContact>
            </div>{' '}
            <div className="row py-2">
              <FavContacts></FavContacts>
            </div>{' '}
            <div className="row py-2">
              <GeneralContacts></GeneralContacts>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ContactIndex;
