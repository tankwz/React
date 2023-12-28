import React from 'react';
import a from './img/a.png';
import b from './img/b.jpg';

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
      let newCount = state.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        result: newCount > 10 ? 'win' : state.result,
        previous: 'attack',
      };
    });
  };
  defense = () => {
    this.setState((previousS) => {
      let newCount2 = previousS.count - Math.round(Math.random() * 10);
      return {
        count: newCount2,
        result: newCount2 < -10 ? 'lost' : previousS.result,
        previous: 'defense',
      };
    });
  };
  random = () => {
    this.setState((previous) => {
      if (Math.round(Math.random()) == 1) {
        this.attack();
      } else {
        this.defense();
      }
    });
  };
  keepGo = () => {
    this.setState((previous) => {
      for (var a = 0; a < 10; a++) {
        this.random();
      }
    });
  };
  reset = () => {
    this.setState(() => {
      return { count: 0, result: '', previous: '' };
    });
  };

  render() {
    return (
      <div className="row justify-content-center  d-flex">
        <h1 className="col-12 text-center ">Counter: {this.state.count}</h1>
        <div className="col-3 text-center h4">
          Last Play: {this.state.previous}
        </div>
        <div className="col-12"></div>
        <div className="col-3 text-center h3">
          Game Status: {this.state.result}
        </div>
        <div className="col-12 text-center">
          <div className="row justify-content-center rounded-3">
            <div className="col-3 m-0 p-0 border-2 border-info border rounded-3">
              <img
                className="img-fluid w-100 rounded-3"
                src={a}
                alt=""
                style={{
                  objectFit: 'cover',
                  width: '300px',
                  height: '300px',
                  cursor: 'pointer',
                }}
                onClick={this.attack}
              />
            </div>
            <div className="col-1"></div>
            <div className="col-3 p-0 m-0 border-2 border-info border rounded-3">
              <img
                className="img-fluid  w-100 rounded-2"
                src={b}
                alt=""
                style={{
                  objectFit: 'cover',
                  objectPosition: '0px -26px',
                  width: '300px',
                  height: '300px',
                }}
                onClick={this.defense}
              />
            </div>
            <div className="col-12 "></div>
            <div className="col-4 mt-3">
              <button
                onClick={this.random}
                className="btn btn-info form-control"
              >
                Random
              </button>
            </div>
            <div className="col-12"></div>
            <div className="col-4 mt-3">
              <button onClick={this.reset} className="btn btn-warning w-100">
                Reset
              </button>
            </div>
          </div>
          {/* <button
            onClick={this.defense}
            style={{ width: '200px', height: '200px' }}
          >
            -
          </button> */}
        </div>
      </div>
    );
  }
}
