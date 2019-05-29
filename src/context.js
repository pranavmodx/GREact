import React, { Component } from "react";
import greData from "./gredata.json";

const Context = React.createContext();

let topicIDS = [];
for (let i = 0; i < greData.length; i++) {
  if (i === 0) {
    topicIDS.push(greData[i].ID);
  } else if (greData[i].TOPIC !== greData[i - 1].TOPIC) {
    topicIDS.push(greData[i].ID);
  }
}
// console.log(topicIDS);

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_WORD":
      return {
        ...state,
        currentWord: greData[action.payload]
      };
    case "SHOW_TOPIC":
      return {
        ...state,
        currentTopicNo: topicIDS[action.payload],
        currentWord: greData[]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    words: greData,
    currentWord: greData[0],
    currentTopicNo: 0,
    topicIDS: topicIDS,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    console.log(this.state);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
