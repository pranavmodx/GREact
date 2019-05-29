import React, { Component } from "react";
import { Consumer } from "../../context";

class Card extends Component {
  fetchTopic = (currentTopicNo, dispatch) => {
    dispatch({ type: "SHOW_TOPIC", payload: currentTopicNo + 1 });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { currentWord } = this.props;
          const { currentTopicNo, topicIDS, dispatch } = value;
          return (
            <div className="container w-75">
              <div className="card mb-4">
                <div className="card-header bg-success pt-4 mb-3">
                  <div className="h1">
                    <button
                      className="btn float-left btn-success text-dark btn-lg"
                      onClick={this.fetchTopic.bind(
                        this,
                        currentTopicNo,
                        dispatch
                      )}
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                    <span className="font-weight-bold mr-3">Topic:</span>
                    {currentWord.TOPIC}
                    {/* <span class="ml-3 badge badge-dark badge-pill">3</span> */}
                    <button className="btn float-right btn-success text-dark btn-lg">
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-group text-left">
                    <li className="list-group-item bg-light h5">
                      <span className="font-weight-bold mr-1">Word:</span>
                      {currentWord.WORD}
                    </li>
                    <li className="list-group-item bg-light h5 text-info">
                      <span className="font-weight-bold mr-1 text-info">
                        Meaning:
                      </span>
                      {currentWord.MEANING}
                    </li>
                    <li className="list-group-item bg-light h5">
                      <span className="font-weight-bold mr-1">Sentence:</span>
                      {currentWord.SENTENCE}
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

export default Card;
