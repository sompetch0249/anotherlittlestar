import React from "react";
import "./App.css";
import CheckListContainer from "./components/CheckListContainer";
import Game from "./components/tic-tac-toe/tic-tac-toe";

function App() {
  return (
    <div className="App">
      <CheckListContainer></CheckListContainer>
      <Game></Game>
    </div>
  );
}

export default App;
