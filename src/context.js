import React, { Component } from "react";
import greData from "./gredata.json";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    words: greData
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
