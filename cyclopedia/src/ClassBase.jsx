import React from 'react';
import { getRandomUser } from './Util/api';
import Instructor from './Instructor';

class ClassBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('cyclopediaState')) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: '',
      inputFeedBack: '',
    };
  }
  componentDidMount = async () => {
    console.log('componentDidMount');

    if (JSON.parse(localStorage.getItem('cyclopediaState'))) {
    } else {
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
    }

    //console.log(response);
  };
  componentDidUpdate() {
    console.log('componentDidUpdate');
    localStorage.setItem('cyclopediaState', JSON.stringify(this.state));
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleAddStudent = () => {
    this.setState((preV) => {
      return { studentCount: preV.studentCount + 1 };
    });
  };
  handleRemoveAll = () => {
    this.setState(() => {
      return { studentCount: 0 };
    });
  };
  handleToggleInstructor = () => {
    this.setState((preV) => {
      return {
        hideInstructor: !preV.hideInstructor,
      };
    });
  };

  render() {
    console.log('render--------------');
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="rol-3">
            <i
              onClick={this.handleToggleInstructor}
              className={` bi ${
                this.state.hideInstructor ? 'bi-toggle-off ' : 'bi-toggle-on '
              } btn btn-success btn-sml`}
            ></i>
          </div>
          {!this.state.hideInstructor
            ? this.state.instructor && (
                <Instructor
                  instructor={this.state.instructor}
                  handleToggleInstructor={this.handleToggleInstructor}
                ></Instructor>
              )
            : null}

          <div>
            <span className="h4 text-success ">FeedBack</span>
            <br />
            <input
              type="text"
              value={this.state.inputName}
              onChange={(e) => {
                this.setState({ inputName: e.target.value });
              }}
            />
            Value: {this.state.inputName}
            <br />
            <textarea
              name=""
              id=""
              value={this.state.inputFeedBack}
              onChange={(e) => this.setState({ inputFeedBack: e.target.value })}
            ></textarea>
            Value: {this.state.inputFeedBack}
          </div>
          <div className="col-12">
            <span className="h4 text-success">Student</span>
            <div>Student Count: {this.state.studentCount}</div>
            <button
              onClick={this.handleAddStudent}
              className="btn btn-info btn-sm"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add Student
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button
              onClick={this.handleRemoveAll}
              className="btn btn-danger btn-sm"
            >
              Remove All Student{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassBase;
