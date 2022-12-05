import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as game from './game-logic.js';
import * as levels from './levels.js';


function Square(props) {
    let subclass = props.value ? ' ' + props.value : '';
    let highlight = props.highlight ? (<div className="highlight"></div>) : null;
    return (
        <button className={"square" + subclass} onClick={props.onClick}>
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
            highlight={this.props.highlight[0] === i && this.props.highlight[1] === j}
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
        const level = levels.getLevel(props.level).map((r) => r.slice());
        this.state = {
            history: [{
                squares: level,
            }],
            stepNumber: 0,
            highlight: [-1, -1],
            level: props.level,
        }
    }

    static getDerivedStateFromProps(props, currentState) {
        if (currentState.level !== props.level) {
            const level = levels.getLevel(props.level).map((r) => r.slice());
            return ({
                history: [{
                    squares: level,
                }],
                stepNumber: 0,
                highlight: [-1, -1],
                level: props.level,
            });
        }
        return null;
    }

    handleClick(i, j) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = game.handleClick(current.squares, i, j, this.state.highlight);
        if (!squares) {
            this.setState({
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

        let winText = game.checkWin(current.squares) ? 'Level Complete!' : null;

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

class LevelSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
        };
    }

    setLevel(i) {
        this.setState({
            level: i,
        });
    }

    render() {
        const buttons = Array(levels.numLevels()).fill(0).map((x, i) => {
            const desc = 'Level ' + (i+1);
            return (<button key={i} className='level-button' onClick={() => this.setLevel(i)}>{desc}</button>);
        });
        return (<div>
            <div className="levels-container">{buttons}</div>
            <div className='game-container'><Game level={this.state.level} /></div>
        </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LevelSelect />);

