import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => {
                this.props.onClick();
            }}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    //vvvv
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'x';
        this.setState({squares: squares});

    }

    renderSquare(i) {
        return (<Square value={this.state.squares[i]}
                        onClick={() => {
                            this.handleClick(i)
                        }}

        />);
    }

    render() {
        const status = 'Next player: X0000';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// class Clock extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>Hello.world!</h1>
//                 <h2>It is {this.props.date.toLocaleString()}</h2>
//             </div>
//         )
//     }
//
// }

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );
}

// setInterval(tick, 1000);
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class Arrays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {arrays: this.props.arrays};
    }

    render() {
        return (
            <div>
                <ol start={7}>
                    {firstArray.map((number) =>
                        <li>jfklfjkffj{number}</li>
                    )}
                </ol>

                <input placeholder={'hodler'} value={this.state.email}/>
            </div>
        )
    }

}

function ss(name) {
    console.log(name + '---');
    askNet().then(r => 111);

}

class InputHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: ''};
    }


    render() {
        return <div>
            <input placeholder={'holder'} value={this.state.email}
                   onChange={event => {
                       this.setState({email: event.target.value})
                       ss(event.target.value);
                   }}/>
        </div>
    }
}

async function askNet() {
    let requestParams;
    const url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
    let response = await fetch(url, requestParams);
    console.log('返回参数: ', response);
}

function Ss2(props) {
    return <li>{props.key2 == 1 ? 'true' : 'false'}</li>

}

const firstArray = [1, 2, 3];

function ReturnList() {
    // return (<ol>{firstArray.map((content) => Ss2({number: content}))}</ol>);
    return (<ol>{firstArray.map((content) =>
        <Ss2 key2={content}/>
    )}</ol>);
}


function TodoList() {
    const todos = [1, 2, 3];
    return (
        <div>
            {todos.map((content) => <Ss2 message={content} key={content}/>)}
        </div>
    )

}

//
// ReactDOM.render(
//     <Arrays arrays={firstArray}/>,
//     document.getElementById('root')
// );

class Ass extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {backgroundColor:'green'}
    // }
    render() {
        return <button onClick={this.handleClick} style={this.state}>72897287</button>
    }

    handleClick = () => this.setState({backgroundColor: 'red'})
}

const arr = [1, 2, 'hii']
const obj = {
    name: '小明',
    age: 22
}

class Ff extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {backgroundColor:'green'}
    // }
    render() {
        return (
            <div>
                <h1>属性</h1>
                <p>{this.props.name}</p>
                <p>{this.props.arr[2]}</p>
                <p>{this.props.obj.name}</p>
                <p>{obj.name}</p>
            </div>
        )
    }

    handleClick = () => this.setState({backgroundColor: 'red'})
}

// const Test = React.createClass({
//         render() {
//             return (
//                 <div>1111</div>
//             );
//         }
//
//     })
// ;

// var Demo = React.createClass({
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1>属性</h1>
//                 <p>{this.props.name}</p>
//                 <p>{this.props.arr[2]}</p>
//                 <p>{this.props.obj.name}</p>
//                 <p>{obj.name}</p>
//             </div>
//         )
//     }
// })

// ReactDOM.render(<Demo obj={obj} arr={arr} name="hello" str="hi"/>, document.getElementById('root'))


// ReactDOM.render(<Ff obj={obj} arr={arr} name="hello" str="hi"/>,document.getElementById('root'))

class Test2 extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={this.handleClick}>点这里-111-222-</button>
            </div>
        );
    }

    handleClick = () => {
        console.log('1111')
        this.setState({name:'72828'})
    };
}

ReactDOM.render(
    <Test2/>,
    document.getElementById('root')
);
