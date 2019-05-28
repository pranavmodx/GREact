import React, { Component } from "react";
import { Consumer } from "../../context";

class Buttons extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="btn-group mx-auto">
              <button className="btn btn-lg btn-primary">Previous Word</button>
              <button className="btn btn-dark px-4">
                <i className="fas fa-random mr-1" />
                Random Word
              </button>
              <button className="btn btn-lg btn-primary">Next Word</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Buttons;
