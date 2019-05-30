import React, { Component } from "react";
import { Consumer } from "../../context";
import { topicIDS } from "../../context";

class Card extends Component {
  fetchTopic = (currentTopicNo, dispatch, e) => {
    console.log("Should be working");
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === "Previous Topic") {
      if (currentTopicNo === 0) {
        dispatch({ type: "SHOW_TOPIC", payload: topicIDS.length - 1 });
      } else {
        dispatch({ type: "SHOW_TOPIC", payload: currentTopicNo - 1 });
      }
    } else if (e.currentTarget.name === "Next Topic") {
      if (currentTopicNo === topicIDS.length - 1) {
        dispatch({ type: "SHOW_TOPIC", payload: 0 });
      } else {
        dispatch({ type: "SHOW_TOPIC", payload: currentTopicNo + 1 });
      }
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { currentWord } = this.props;
          const { currentTopicNo, dispatch } = value;
          return (
            <div className="container w-75">
              <div className="card mb-4">
                <div className="card-header bg-success pt-4 mb-3">
                  <div className="h1">
                    <button
                      name="Previous Topic"
                      className="btn float-left btn-success text-dark btn-lg"
                      onClick={this.fetchTopic.bind(
                        this,
                        currentTopicNo,
                        dispatch
                      )}
                    >
                      <i
                        name="Previous Topic"
                        className="fas fa-chevron-left"
                      />
                    </button>
                    <span className="font-weight-bold mr-3">Topic:</span>
                    {currentWord.TOPIC}
                    <span className="ml-3 badge badge-dark badge-pill">
                      {topicIDS[currentTopicNo + 1] - topicIDS[currentTopicNo]}
                    </span>
                    <button
                      name="Next Topic"
                      className="btn float-right btn-success text-dark btn-lg"
                      onClick={this.fetchTopic.bind(
                        this,
                        currentTopicNo,
                        dispatch
                      )}
                    >
                      <i name="Next Topic" className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-group text-left">
                    <li className="list-group-item bg-light text-info h4">
                      <span className="font-weight-bold text-info mr-1">
                        Word:
                      </span>
                      {currentWord.WORD}
                    </li>
                    <li className="list-group-item bg-light h4">
                      <span className="font-weight-bold mr-1">Meaning:</span>
                      {currentWord.MEANING}
                    </li>
                    <li className="list-group-item bg-light h4">
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
