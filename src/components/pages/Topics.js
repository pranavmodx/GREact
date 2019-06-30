import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

class Topics extends Component {
  onClick(id, dispatch) {
    dispatch({ type: "LOAD_TOPIC", payload: id });
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { words, topicIDS, dispatch } = value;
          return (
            <div className="container">
              <h1 className="display-3 mb-5">Topics</h1>
              <ul
                className="list-group text-left"
                style={{ display: "inline-block" }}
              >
                {topicIDS.map((id, idx) => (
                  <li key={idx} className="list-group-item bg-light">
                    <Link
                      to="/"
                      className="text-info"
                      style={{ textDecoration: "none" }}
                      onClick={this.onClick.bind(this, id, dispatch)}
                    >
                      {words[id].TOPIC}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Topics;
