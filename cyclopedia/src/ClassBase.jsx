import React from 'react';
import { getRandomUser } from './Util/api';

class ClassBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  }
  componentDidMount = async () => {
    console.log('componentDidMount');
    const response = await getRandomUser();
    this.setState((preV) => {
      return {
        instructor: {
          name: response.data.first_name + ' ' + response.data.first_name,
          email: response.data.email,
          phone: response.data.phone_number,
        },
      };
    });
    //console.log(response);
  };
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render--------------');
    return (
      <div className="container mt-5">
        <div className="row">
          {this.state.instructor && (
            <div className="col-12">
              <p>{this.state.instructor.name}</p>
              <p>{this.state.instructor.email}</p>
              <p>{this.state.instructor.phone}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ClassBase;
