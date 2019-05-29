import React, { Component } from "react";
import { Consumer } from "../../context";

class Buttons extends Component {
  onClick(currentWord, totalWordsLength, dispatch, e) {
    if (e.target.name === "Previous Word") {
      if (currentWord.ID === 0) {
        dispatch({ type: "SHOW_WORD", payload: totalWordsLength - 1 });
      } else {
        dispatch({ type: "SHOW_WORD", payload: currentWord.ID - 1 });
      }
    } else if (e.target.name === "Next Word") {
      if (currentWord.ID === totalWordsLength - 1) {
        dispatch({ type: "SHOW_WORD", payload: 0 });
      } else {
        dispatch({ type: "SHOW_WORD", payload: currentWord.ID + 1 });
      }
    } else if (e.target.name === "Random Word") {
      dispatch({
        type: "SHOW_WORD",
        payload: Math.floor(Math.random() * 1870) + 1
      });
    }
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { words, currentWord, dispatch } = value;
          // console.log("Buttons il index : ", currentWord);
          return (
            <div className="btn-group mx-auto">
              <button
                name="Previous Word"
                className="btn btn-lg btn-primary"
                onClick={this.onClick.bind(
                  this,
                  currentWord,
                  words.length,
                  dispatch
                )}
              >
                Previous Word
              </button>
              <button
                name="Random Word"
                className="btn btn-dark px-4"
                onClick={this.onClick.bind(
                  this,
                  currentWord,
                  words.length,
                  dispatch
                )}
              >
                <i className="fas fa-random mr-1" />
                Random Word
              </button>
              <button
                name="Next Word"
                className="btn btn-lg btn-primary"
                onClick={this.onClick.bind(
                  this,
                  currentWord,
                  words.length,
                  dispatch
                )}
              >
                Next Word
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Buttons;
