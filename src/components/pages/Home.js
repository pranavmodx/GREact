import React, { Component } from "react";
import { Consumer } from "../../context";
import Progress from "../layout/Progress";
import Card from "../main/Card";
import Buttons from "../layout/Buttons";

class Home extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { currentWord } = value;
          return (
            <React.Fragment>
              <div className="container">
                <Progress />
                <Card key={currentWord.ID} currentWord={currentWord} />
              </div>
              <Buttons />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Home;
