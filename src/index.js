import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props) {
    let subclass = props.value ? ' '+props.value : '';
    return (
        <button className={"square"+subclass} onClick={props.onClick}>
            {}
        </button>
    );

}

class Board extends React.Component {
    renderSquare(i, j) {
        return (<Square
            key={100 * i + j}
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i, j)}
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
                    [null, null, null, null, null],
                    [null, null, null, null, null],
                    [null, null, null, null, null]
                ],
            }],
            stepNumber: 0,
            xNext: true,
        }
    }

    handleClick(i, j) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.map((r) => r.slice());
        if (squares[i][j]) {
            return;
        }
        squares[i][j] = this.state.xNext ? 'green' : 'green';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xNext: !this.state.xNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xNext: (step % 2) === 0,
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

        let status;
        status = 'Next player: ' + (this.state.xNext ? 'X' : 'O');

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

