import React from 'react';
class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }
  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const response = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });

    if (response.status === 'success') {
      this.setState({ errorMessage: undefined, successMessage: response.msg });
      document.querySelector('.contact-form').reset();
    } else {
      this.setState({ errorMessage: response.msg, successMessage: undefined });
    }
  };
  cancelUpdate = () => {
    this.props.cancelUpdateContact();
  };
  render() {
    return (
      <div className="border rounded  col-12 p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          action=""
          className="contact-form"
        >
          <div className="row">
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? ' Update Contact' : 'Add New Contact'}
            </div>
            <div className="col-12 col-md-4 p-1 ">
              <input
                type="form-control form-control-sm"
                placeholder="Name"
                name="contactName"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.name : ''
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="form-control form-control-sm"
                placeholder="Email"
                name="contactEmail"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.email : ''
                }
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="form-control form-control-sm"
                placeholder="Phone"
                name="contactPhone"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.phone : ''
                }
              />
            </div>

            {this.state.errorMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}
            {this.state.successMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-success">
                {this.state.successMessage}
              </div>
            )}

            <div
              className={`col-12 ${
                this.props.isUpdating ? 'col-md-6' : 'col-md-8 offset-2'
              }`}
            >
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
            <div className={`col-12 col-md-6`}>
              {this.props.isUpdating && (
                <button
                  onClick={this.cancelUpdate}
                  className="btn btn-secondary  btn-sm form-control "
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;
