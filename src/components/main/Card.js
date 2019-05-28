import React, { Component } from "react";
import { Consumer } from "../../context";

class Data extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { words } = value;
          return (
            <div className="container w-75">
              <div className="card mb-4">
                <div className="card-header bg-success pt-4 mb-3">
                  <div className="h1">
                    <button className="btn float-left btn-success text-dark btn-lg">
                      <i className="fas fa-chevron-left" />
                    </button>
                    <span className="font-weight-bold mr-1">Topic:</span>
                    {words[0].TOPIC}
                    <span class="ml-3 badge badge-dark badge-pill">3</span>
                    <button className="btn float-right btn-success text-dark btn-lg">
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-group text-left">
                    <li className="list-group-item bg-light h5">
                      <span className="font-weight-bold mr-1">Word:</span>
                      {words[0].WORD}
                    </li>
                    <li className="list-group-item bg-light h5 text-info">
                      <span className="font-weight-bold mr-1 text-info">
                        Meaning:
                      </span>
                      {words[0].MEANING}
                    </li>
                    <li className="list-group-item bg-light h5">
                      <span className="font-weight-bold mr-1">Sentence:</span>
                      {words[0].SENTENCE}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Data;
