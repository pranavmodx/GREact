import React, { Component } from "react";
import Progress from "../layout/Progress";
import Card from "../main/Card";
import Buttons from "../layout/Buttons";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Progress />
          <Card />
        </div>
        <Buttons />
      </React.Fragment>
    );
  }
}

export default Index;
