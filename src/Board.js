import React from "react";
import "./index.css";
import Square from "./Square";

// This is is the tictactoe board and is the soul of game. it displays the move and decides the winner.
class Board extends React.Component{
    renderSquare(i){
        return (
            <Square value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}/>
        );
    }

    render(){
        return (
        <dic>
            <div className="status">{status}</div>
            <div classNam="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div classNam="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div classNam="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </dic>
        );
    }
}

export default Board;