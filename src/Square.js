import React from "react";
import "./index.css";

// This is a simple square of tictactoe, which on click will mark a move.
function Square(props){
    return (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
    );
}

export default Square;