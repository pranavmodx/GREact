import React, { Component } from "react";
import { Consumer } from "../../context";

class Progress extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { words } = value;
          return (
            <div className="text-center container w-75 mx-auto mb-5">
              <div>
                <h5 className="text-info">1 of {words.length}</h5>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  style={{ width: `${1000 / 1800}%` }}
                />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Progress;
