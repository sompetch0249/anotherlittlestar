import React, { Component } from "react";
import List from "./List";
import styled from "styled-components";

const Container = styled.div`
  margin: 16px;
`;
const InputTask = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid red;
`;

export default class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  onChangeSubmit = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  onChangeCheck = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          <InputTask
            size="small"
            value={this.state.term}
            onChange={this.onChangeSubmit}
          ></InputTask>
        </form>
        <List items={this.state.items} onChange={this.onChangeCheck}></List>
      </Container>
    );
  }
}
