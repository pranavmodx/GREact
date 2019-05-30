import React, { Component } from "react";
import greData from "./gredata.json";

const Context = React.createContext();

export let topicIDS = [];
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
        // Magic line
        currentTopicNo: Number(greData[action.payload].TOPIC.slice(0, 3)) - 1,
        currentWord: greData[action.payload]
      };
    case "SHOW_RANDOM_WORD":
      return {
        ...state,
        currentTopicNo: Number(greData[action.payload].TOPIC.slice(0, 3)) - 1,
        currentWord: greData[action.payload]
      };
    case "SHOW_TOPIC":
      return {
        ...state,
        currentTopicNo: action.payload,
        currentWord: greData[topicIDS[action.payload]]
      };
    case "LOAD_TOPIC":
      return {
        ...state,
        currentTopicNo: Number(greData[action.payload].TOPIC.slice(0, 3)) - 1,
        currentWord: greData[action.payload]
      };
    case "SHOW_SEARCH_RESULT":
      return {
        ...state,
        currentTopicNo: Number(greData[action.payload].TOPIC.slice(0, 3)) - 1,
        currentWord: greData[action.payload]
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
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    // console.log(this.state);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
