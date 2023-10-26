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
      selectedContact: undefined,
      isUpdating: false,
    };
  }
  handleAddContact = (newContact) => {
    if (newContact.name === '') {
      return { status: 'failure', msg: 'Please Enter a valid name' };
    } else if (newContact.phone === '') {
      return { status: 'failure', msg: 'Please Enter a valid Number' };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return { status: 'failre', msg: 'Duplicate Record' };
    } else {
      const newFinalContact = {
        ...newContact,
        id:
          this.state.contactList[this.state.contactList.length - 1].id !==
          undefined
            ? this.state.contactList[this.state.contactList.length - 1].id + 1
            : 1,
        isFav: false,
      };
      //   alert('Hello');
      this.setState((prevS) => {
        return {
          contactList: prevS.contactList.concat([newFinalContact]),
        };
      });
    }
    return { status: 'success', msg: 'Contact was added successfully' };
  };
  handleToggleFav = (contact) => {
    this.setState((prevS) => {
      return {
        contactList: prevS.contactList.map((item, index) => {
          if (item.id === contact.id) {
            return { ...item, isFav: !item.isFav };
          }
          return item;
        }),
      };
    });
    console.log(contact);
  };
  handleDeleteContact = (contactId) => {
    this.setState((prevS) => {
      return {
        contactList: prevS.contactList.filter((item) => {
          return item.id !== contactId;
        }),
      };
    });
    console.log(contactId);
  };

  handleRandomContact = (contact) => {
    const newContact = {
      ...contact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFav: false,
    };
    this.setState((prevS) => {
      return {
        contactList: prevS.contactList.concat([newContact]),
      };
    });
  };

  handleRemoveAll = () => {
    this.setState(() => {
      return { contactList: [] };
    });
  };
  handleUpdateClick = (contact) => {
    console.log(contact);

    this.setState((preV) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };
  cancelUpdateContact = () => {
    this.setState(() => {
      return {
        isUpdating: false,
        selectedContact: undefined,
      };
    });
  };
  handleUpdateContact = (contact) => {
    console.log(contact);
    if (contact.name === '') {
      return { status: 'failure', msg: 'Please Enter a valid name' };
    } else if (contact.phone === '') {
      return { status: 'failure', msg: 'Please Enter a valid Number' };
    }
    this.setState((preV) => {
      return {
        contactList: preV.contactList.map((item) => {
          if (item.id == contact.id) {
            return {
              ...item,
              name: contact.name,
              email: contact.email,
              phone: contact.phone,
            };
          }
          return item;
        }),
        isUpdating: false,
        SelectedContact: undefined,
      };
    });

    return { status: 'success', msg: 'Contact was updated successfully' };
  };
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" style={{ minHeight: '85vh' }}>
          <div className="row mt-4">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleRandomContact={this.handleRandomContact}
              ></AddRandomContact>
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAll={this.handleRemoveAll}
              ></RemoveAllContact>
            </div>
            <div className="row py-2   text-center">
              <div className="col-8 offset-2 row ">
                <AddContact
                  handleAddContact={this.handleAddContact}
                  selectedContact={this.state.selectedContact}
                  isUpdating={this.state.isUpdating}
                  cancelUpdateContact={this.cancelUpdateContact}
                  handleUpdateContact={this.handleUpdateContact}
                ></AddContact>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row ">
                <FavContacts
                  contacts={this.state.contactList.filter(
                    (a) => a.isFav === true
                  )}
                  handleToggleFav={this.handleToggleFav}
                  handleDeleteContact={this.handleDeleteContact}
                  handleUpdateClick={this.handleUpdateClick}
                ></FavContacts>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row ">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (a) => a.isFav === false
                  )}
                  handleToggleFav={this.handleToggleFav}
                  handleDeleteContact={this.handleDeleteContact}
                  handleUpdateClick={this.handleUpdateClick}
                ></GeneralContacts>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default ContactIndex;
