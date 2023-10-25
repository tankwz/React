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
  render() {
    return (
      <div className="border rounded  col-12 p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          action=""
          className="contact-form"
        >
          <div className="row">
            <div className="col-12 text-white-50">Add new Contact</div>
            <div className="col-12 col-md-4 p-1 ">
              <input
                type="form-control form-control-sm"
                placeholder="Name"
                name="contactName"
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="form-control form-control-sm"
                placeholder="Email"
                name="contactEmail"
              />
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                type="form-control form-control-sm"
                placeholder="Phone"
                name="contactPhone"
              />
            </div>

            <div>
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;
