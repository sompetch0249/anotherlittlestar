import React, { Component } from "react";
import styled from "styled-components";

const BarPosition = styled.div`
  position: relative;
  height: 20px;
  border-radius: 50px;
  border: 1px solid #333;
  margin-left: auto;
  margin-right: auto;
`;
const FillerBar = styled.div`
  background: #1da598;
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;
const Container = styled.div`
  text-align: center;
  margin: 16px;
`;

export const ProgressBar = props => {
  return (
    <BarPosition>
      <Filler percentage={props.percentage} />
    </BarPosition>
  );
};

const Filler = props => {
  return <FillerBar style={{ width: `${props.percentage}%` }} />;
};

export default class ProgressBarTest extends Component {
  render() {
    return (
      <div>
        <Container>
          <ProgressBar percentage={this.props.percentage} />
        </Container>
      </div>
    );
  }
}
