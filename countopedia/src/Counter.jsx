import React from 'react';
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.defense = this.defense.bind(this);
    this.state = {
      count: 0,
      result: '',
      previous: '',
    };
  }
  attack = () => {
    this.setState((state) => {
      return {
        count: state.count + 100,
      };
    });
    this.setState((state) => {
      return {
        count: state.count + 5,
      };
    });
  };
  defense = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
    this.setState((previousS) => ({
      count: previousS.count - 2,
    }));
  };

  render() {
    return (
      <div className="row justify-content-center  d-flex">
        <h1 className="col-12 text-center ">Counter: {this.state.count}</h1>
        <div className="col-12 text-center">
          <button
            onClick={this.attack}
            style={{ width: '200px', height: '200px' }}
          >
            +
          </button>
          <button
            onClick={this.defense}
            style={{ width: '200px', height: '200px' }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
