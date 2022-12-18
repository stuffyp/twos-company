import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as game from './game-logic.js';
import * as levels from './levels.js';


var mouseDown = 0;
document.body.onmousedown = function() { 
  if(!mouseDown){
    ++mouseDown;
  }
}
document.body.onmouseup = function() {
  if(mouseDown){
    --mouseDown;
  }
}

function Square(props) {
    let subclass = props.value ? ' ' + props.value : '';
    let highlight = props.orange && <div className="orange-doorframe"></div>;
    highlight = props.pink ? (<div className="pink-doorframe"></div>) : highlight;
    highlight = props.highlight ? (<div className="highlight"></div>) : highlight;
    return (
        <button className={"square" + subclass} onMouseDown={props.onClick} onMouseOver={props.onDrag}>
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
        let pink = false;
        for (let k = 0; k < this.props.pinkDoorframes.length; k++) {
            let temp = this.props.pinkDoorframes[k];
            if (temp[0] === i && temp[1] === j) {
                pink = true;
            }
        }
        
        return (<Square
            key={game.key(i, j)}
            value={this.props.squares[i][j]}
            onClick={() => this.props.onClick(i, j)}
            onDrag={()=> this.props.onDrag(i, j)}
            highlight={h}
            orange={orange}
            pink={pink}
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
            const moves = game.getMoves(this.state.level, current.squares, i, j);
            const highlight = current.squares[i][j]==='wall' ? [-1, -1] : [i, j];
            this.setState({
                highlight: highlight,
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
            this.props.finishLevel(this.state.level, history.length);
        }
    }

    handleKey(event){
        if(event.keyCode===38){
            if(this.state.stepNumber>0){
                this.jumpTo(this.state.stepNumber-1);
            }
        } else if(event.keyCode===40){
            if(this.state.stepNumber<this.state.history.length-1){
                this.jumpTo(this.state.stepNumber+1);
            }
        }
        event.preventDefault();
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
                'Start';
            const classStr = this.state.history.length>1 && move===this.state.stepNumber ? 'current-button' : undefined;
            return (
                <li key={move}>
                    <button className={classStr} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let win = game.checkWin(current.squares);
        let winText = win && 'Level Complete!';

        const editButton = this.state.level===-1 && <button onClick={() => this.props.edit()}>{'Edit'}</button>;
        const editText = this.state.level===-1 && <div>Level Editor</div>;

        return (
            <div className="game" onKeyDown={(event)=>this.handleKey(event)}>
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                        onDrag={()=>{}}
                        highlight={[
                            this.state.highlight,
                            this.state.leftMove,
                            this.state.rightMove,
                            this.state.downMove,
                            this.state.upMove,
                        ]}
                        orangeDoorframes={levels.getOrange(this.state.level)}
                        pinkDoorframes={levels.getPink(this.state.level)}
                    />
                </div>
                <div className="game-info">
                    {editText}
                    <div id='editor-play'>{editButton}</div>
                    <div id='win-text'>{winText}</div>
                    <div>Move History</div>
                    <ol start='0'>{moves}</ol>
                </div>
            </div>
        );
    }
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
        const level = levels.getLevel(-1).map((r) => r.slice());
        this.state = {
            squares: level,
            highlight: [-1, -1],
            select: 0,
        }
    }

    static get paletteValues(){
        return [null, 'wall', 'green', 'blue', 'red', 'neut', 'orange-door', 'orange-key', 'pink-door', 'pink-key'];
    }

    onDrag(i, j){
        if(mouseDown){
            if(levels.writeSquare(i, j, this.constructor.paletteValues[this.state.select])){
                const level = levels.getLevel(-1).map((r) => r.slice());
                const h = this.state.select===7||this.state.select===9 ? [-1, -1] : [i, j];
                this.setState({
                    highlight: h,
                    squares: level,
                });
                this.props.updateLevelCode();
            }
        }
    }

    handleClick(i, j) {
        if(levels.writeSquare(i, j, this.constructor.paletteValues[this.state.select])){
            const level = levels.getLevel(-1).map((r) => r.slice());
            const h = this.state.select===7||this.state.select===9 ? [-1, -1] : [i, j];
            this.setState({
                highlight: h,
                squares: level,
            });
            this.props.updateLevelCode();
        } else {
            this.setState({
                highlight: [i, j],
            });
        }
    }

    selectClick(i){
        this.setState({
            select: i,
        });
    }

    loadLevel(){
        let inputLevelCode = prompt('Enter a level code:');
        if(!inputLevelCode){
            return;
        }
        try{
            levels.loadCode(inputLevelCode);
        } catch (e) {
            alert('Something went wrong. Make sure that your level code is valid.');
            return;
        }
        this.props.updateLevelCode();
        this.setState({
            squares : levels.getLevel(-1).map((r) => r.slice()),
        });
    }

    render() {
        const palette = this.constructor.paletteValues.map((val, i) => (<Square
            key={i}
            value={val}
            onClick={() => this.selectClick(i)}
            onDrag={()=>{}}
            highlight={this.state.select===i}
            pink={val==='pink-door'||val==='pink-key'}
            orange={val==='orange-door'||val==='orange-key'}
        />));
        const validLevel = levels.customLevelValid() || <div id='invalid-text'>Invalid Level</div>;
        const playButton = levels.customLevelValid() && 
            <div id='editor-play'><button onClick={() => this.props.play()}>{'Play'}</button></div>;
        const loadButton = <div id='editor-load'><button onClick={() => this.loadLevel()}>Load</button></div>;
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        onClick={(i, j) => this.handleClick(i, j)}
                        onDrag={(i, j) => this.onDrag(i, j)}
                        highlight={[
                            this.state.highlight,
                            [-1, -1],
                            [-1, -1],
                            [-1, -1],
                            [-1, -1],
                        ]}
                        orangeDoorframes={levels.getOrange(-1)}
                        pinkDoorframes={levels.getPink(-1)}
                    />
                </div>
                <div className="game-info">
                    <div>{'Level Editor'}</div>
                    {validLevel}
                    {playButton}
                    {loadButton}
                    <div id='palette'>{palette}</div>
                </div>
            </div>
        );
    }
}

class LevelSelect extends React.Component {
    constructor(props) {
        const storedCompleted = localStorage['completed'];
        const completed = storedCompleted ? JSON.parse(storedCompleted) : Array(levels.numLevels()).fill(0);
        super(props);
        this.state = {
            level: 0,
            //elo: 700,
            completed: completed,
            play: false,
            levelCode : levels.levelCode(0),
        };
    }

    updateLevelCode() {
        this.setState({
            levelCode : levels.levelCode(this.state.level),
        });
    }

    setLevel(i) {
        if(i===-1){
            this.setState({
                play: false,
            });
        }
        this.setState({
            level: i,
            levelCode : levels.levelCode(i),
        });
    }

    playCustom() {
        this.setState({
            play: true,
        });
    }

    editCustom() {
        this.setState({
            play: false,
        })
    }

    finishLevel(i, moveNum) {
        if(i===-1){
            return;
        }
        let temp = this.state.completed.slice();
        if (temp[i]<=moveNum&&temp[i]>0) {
            return; //stops infinite refresh loop
        }
        temp[i] = moveNum;
        //const newElo = levels.performance(temp);
        this.setState({
            completed: temp,
            //elo: newElo,
        });
        localStorage['completed'] = JSON.stringify(temp);
    }

    render() {
        const buttons = Array(levels.numLevels()).fill(0).map((x, i) => {
            const desc = 'Level ' + (i + 1);
            let classStr = this.state.completed[i] ? 'completed-button' : 'level-button';
            if (this.state.completed[i] === levels.bestTimes[i]) {
                classStr = 'optimal-button';
            } else if (this.state.completed[i]&&this.state.completed[i]<levels.bestTimes[i]){
                classStr = 'super-optimal-button';
            }
            return (<button key={i} className={classStr} onClick={() => this.setLevel(i)}>{desc}</button>);
        });
        const gameVal = this.state.level===-1&&!this.state.play ? <Editor play={()=>this.playCustom()} updateLevelCode={()=>this.updateLevelCode()}/> : 
            <Game level={this.state.level} finishLevel={(i, moveNum) => this.finishLevel(i, moveNum)} edit={()=>this.editCustom()}/>;
        //const levelElo = this.state.level===-1 ? '???' : levels.eloValues[this.state.level];

        return (<div>
            <div className="levels-container">
                {buttons}
                <button className='level-button' onClick={() => this.setLevel(-1)}>{'Level Editor'}</button>
            </div>
            <div className='elo-container'>
                <div>{this.state.level+1 ? 'Level '+ (this.state.level+1) + ':' : 'Level: Custom'}</div>
            </div>
            {/*<div className='elo-container'>
                <div>{'ELO: '+ this.state.elo}</div>
                <div id='level-elo'>{'Level Difficulty: '+ levelElo}</div>
            </div>*/}
            <div className="level-code-container">
                <label htmlFor='level-code-text'>Level Code:</label>
                <div id='level-code-text'>{this.state.levelCode}</div>
            </div>
            <div className='game-container'>{gameVal}</div>
        </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LevelSelect />);

