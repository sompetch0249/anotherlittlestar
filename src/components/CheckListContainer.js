import React, { Component } from "react";
import Header from "./Header";
import ProgressBarTest from "./ProgressBarTest/ProgressBarTest";
import CheckList from "./CheckList/CheckList";

export default class CheckListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 60
    };
  }

  TryClick = e => {
    alert("Check Click");
  };

  render() {
    return (
      <div>
        <Header></Header>
        <ProgressBarTest percentage={this.state.percentage}></ProgressBarTest>
        <CheckList></CheckList>
        <button onClick={this.TryClick}>Let's click</button>
      </div>
    );
  }
}
