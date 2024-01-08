import React from 'react';

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('did mount instructor');
  }
  componentDidUpdate() {
    console.log('did update instructor');
  }

  render() {
    console.log('render instructor');
    return (
      <div className="col-12">
        <h5 className="text-info">Instructor</h5>
        <p>Name: {this.props.instructor.name}</p>
        <p>Email: {this.props.instructor.email}</p>
        <p>Phone: {this.props.instructor.phone}</p>
      </div>
    );
  }
}

export default Instructor;
