import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as game from './game-logic.js';
import * as levels from './levels.js';


function Square(props) {
    let subclass = props.value ? ' ' + props.value : '';
    let highlight = props.orange ? (<div className="orange-doorframe"></div>) : null;
    highlight = props.highlight ? (<div className="highlight"></div>) : highlight;
    return (
        <button className={"square" + subclass} onClick={props.onClick}>
            {highlight}
        </button>
    );

}

class Board extends React.Component {
    renderSquare(i, j) {
        let h = false;
        for (let k = 0; k < 5; k++) {
            let temp = this.props.highlight[k];
            if (temp[0] === i && temp[1] === j) {
                h = true;
            }
        }
        let orange = false;
        for (let k = 0; k < this.props.orangeDoorframes.length; k++) {
            let temp = this.props.orangeDoorframes[k];
            if (temp[0] === i && temp[1] === j) {
                orange = true;
            }
        }
        return (<Square
            key={game.key(i, j)}
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i, j)}
            highlight={h}
            orange={orange}
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
            leftMove: [-1, -1],
            rightMove: [-1, -1],
            upMove: [-1, -1],
            downMove: [-1, -1],
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
                leftMove: [-1, -1],
                rightMove: [-1, -1],
                downMove: [-1, -1],
                upMove: [-1, -1],
                level: props.level,
            });
        }
        return null;
    }

    handleClick(i, j) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = game.handleClick(this.state.level, current.squares, i, j, this.state.highlight);
        if (!squares) {
            let moves = game.getMoves(this.state.level, current.squares, i, j);
            this.setState({
                highlight: [i, j],
                leftMove: moves.left,
                rightMove: moves.right,
                downMove: moves.down,
                upMove: moves.up,
            });
            return;
        }
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            highlight: [-1, -1],
            leftMove: [-1, -1],
            rightMove: [-1, -1],
            downMove: [-1, -1],
            upMove: [-1, -1],
        });
        let win = game.checkWin(squares);
        if (win) {
            this.props.finishLevel(this.state.level, history.length <= levels.bestTimes[this.state.level]);
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            highlight: [-1, -1],
            leftMove: [-1, -1],
            rightMove: [-1, -1],
            downMove: [-1, -1],
            upMove: [-1, -1],
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        const moves = history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Restart Level';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let win = game.checkWin(current.squares);
        let winText = win ? 'Level Complete!' : null;

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                        highlight={[
                            this.state.highlight,
                            this.state.leftMove,
                            this.state.rightMove,
                            this.state.downMove,
                            this.state.upMove,
                        ]}
                        orangeDoorframes={levels.getOrange(this.state.level)}
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
            completed: Array(levels.numLevels()).fill(0),
        };
    }

    setLevel(i) {
        this.setState({
            level: i,
        });
    }

    finishLevel(i, optimal) {
        let temp = this.state.completed.slice();
        if (temp[i] === 2 || (temp[i] === 1 && !optimal)) {
            return; //stops infinite refresh loop
        }
        temp[i] = optimal ? 2 : 1;
        this.setState({
            completed: temp,
        });
    }

    render() {
        const buttons = Array(levels.numLevels()).fill(0).map((x, i) => {
            const desc = 'Level ' + (i + 1);
            let classStr = this.state.completed[i] ? 'completed-button' : 'level-button';
            if (this.state.completed[i] === 2) {
                classStr = 'optimal-button';
            }
            return (<button key={i} className={classStr} onClick={() => this.setLevel(i)}>{desc}</button>);
        });
        return (<div>
            <div className="levels-container">{buttons}</div>
            <div className='game-container'><Game level={this.state.level} finishLevel={(i, b) => this.finishLevel(i, b)} /></div>
        </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LevelSelect />);

