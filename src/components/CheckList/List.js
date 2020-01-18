import React from "react";
import styled from "styled-components";
import { Checkbox } from "antd";

const Container = styled.div`
  margin: 10px;
`;

const ListItems = styled.li`
  list-style-type: none;
  text-align: left;
`;

const List = props => (
  <Container>
    <ul>
      {props.items.map((item, index, onChangeCheck) => (
        <ListItems key={index}>
          <Checkbox onChangeCheck={onChangeCheck}>{item}</Checkbox>
        </ListItems>
      ))}
    </ul>
  </Container>
);

export default List;
