import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as game from './game-logic.js';


function Square(props) {
    let subclass = props.value ? ' '+props.value : '';
    let highlight = props.highlight ? (<div className="highlight"></div>) : null;
    return (
        <button className={"square"+subclass} onClick={props.onClick}>
            {highlight}
        </button>
    );

}

class Board extends React.Component {
    renderSquare(i, j) {
        return (<Square
            key={game.key(i, j)}
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i, j)}
            highlight={this.props.highlight[0]===i&&this.props.highlight[1]===j}
        />);
    }

    render() {
        const rows = this.props.squares.map((r, i) =>
            <div key={i} className="board-row">
                {this.props.squares[i].map((c, j) => this.renderSquare(i, j))}
            </div>
        );
        return (<div>{rows}</div>);
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: [
                    [null, null, 'green', 'wall', 'red'],
                    ['blue', null, null, 'wall', null],
                    [null, 'wall', null, 'wall', null],
                    [null, 'wall', null, 'green', 'blue'],
                    [null, 'red', null, null, null]
                ],
            }],
            stepNumber: 0,
            highlight: [-1, -1],
        }
        game.load(this.state.history[0].squares);
    }

    handleClick(i, j) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = game.handleClick(current.squares, i, j, this.state.highlight);
        if(!squares){
            this.setState ({
                highlight: [i, j],
            });
            return;
        }
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            highlight: [-1, -1],
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let winText = game.checkWin(current.squares) ? 'You Win!' : null;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                        highlight={this.state.highlight}
                    />
                </div>
                <div className="game-info">
                    <div>{winText}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

