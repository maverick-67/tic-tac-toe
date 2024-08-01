import React from "react";
import Square from "./Square";
import { useState } from "react";

function Board() {
  //Initialize null at every index
  const initialArray = [];
  for (let i = 0; i < 9; i++) {
    initialArray.push(null);
  }
  const [state, setState] = useState(initialArray);
  const [isXTurn, setIsXTurn] = useState(true);

  function checkWinner() {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (let i of winner) {
      const [a, b, c] = i;
      if (
        state[a] != null &&
        state[b] != null &&
        state[c] != null &&
        state[a] === state[b] &&
        state[a] === state[c]
      )
        return state[a];
    }
    return false;
  }

  const isWinner = checkWinner();

  function handleClick(index) {
    const copystate = [...state];
    if (copystate[index] == null) {
      copystate[index] = isXTurn ? "X" : "O";
      setState(copystate);
      setIsXTurn(!isXTurn);
    }
  }

  return (
    <>
      {isWinner ? (
        <> Winner is {isWinner}</>
      ) : (
        <div className="board-container">
          <div className="board-row">
            <Square
              value={state[0]}
              onClick={() => {
                handleClick(0);
              }}
            />
            <Square
              value={state[1]}
              onClick={() => {
                handleClick(1);
              }}
            />
            <Square
              value={state[2]}
              onClick={() => {
                handleClick(2);
              }}
            />
          </div>
          <div className="board-row">
            <Square
              value={state[3]}
              onClick={() => {
                handleClick(3);
              }}
            />
            <Square
              value={state[4]}
              onClick={() => {
                handleClick(4);
              }}
            />
            <Square
              value={state[5]}
              onClick={() => {
                handleClick(5);
              }}
            />
          </div>
          <div className="board-row">
            <Square
              value={state[6]}
              onClick={() => {
                handleClick(6);
              }}
            />
            <Square
              value={state[7]}
              onClick={() => {
                handleClick(7);
              }}
            />
            <Square
              value={state[8]}
              onClick={() => {
                handleClick(8);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Board;
