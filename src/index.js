import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './demo/index3.js';
import ComponentA from "./demo/index4";
import {BrowserRouter, Link, NavLink} from "react-router-dom";
import HashRouter from "react-router-dom";

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
                <ol start={22}>
                    <li className='text-color'>咖啡</li>
                    <li style={{color: 'blue', fontSize: '11px'}}>茶</li>
                    <li style={inlineStyles.boxStyle2}>牛奶</li>
                </ol>
                <a href={'https://blog.csdn.net/weixin_36302575/article/details/86543649'}>1567252675/t</a>
                <a href={'https://blog.csdn.net/weixin_36302575/article/details/86543649'}>1567252675</a>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

const ss = {
    dd: function aa() {

        return React.createElement(JamesShow, {date: new Date()}, 1111);
        // return <div>
        //     172872829
        // </div>
    }
};

const inlineStyles = {
    boxStyle2: {
        fontSize: 16,
        color: "red",
    }
};

class JamesShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.date.toLocaleTimeString()}--fjkfhfjkf</button>
            </div>
        );
    };

    handleClick() {
        this.setState(state => ({
            date: new Date()
        }));
        // this.setState(function (state) {
        //     return {date:new Date()};
        // });
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    //class fields语法
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    // handleClick() {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class Count extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false}
    }

    render() {
        return <div onClick={this.handleClick}>点我试试{this.state.isToggleOn + ''}</div>
        // return TodoList;
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }), () => console.log('111--' + this.state.isToggleOn));
        console.log(this.state.isToggleOn);
    }
//     handleClick(){
// this.setState(function (state){
//     return {count:state.count+1}
// });
//     }
}

function Item(props) {
    return <li>{props.key}</li>;
}

function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    const todos2 = [1, 2, 3];

    const inlineStyles = {
        boxStyle2: {
            fontSize: 14,
            color: "red",
        }
    };
    return (
        <div>
            {todos2.map((content) => <Item key={content} message={content}/>)}
        </div>
    );
}

class RouterPage extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ol>
                        <li><Link to='/demo/index11.js'></Link>11111</li>
                        <li><Link to='Page2'></Link>222222</li>
                        <li><Link to='Page3'></Link>33333</li>
                    </ol>
                </div>
            </BrowserRouter>

        )
    }
}

ReactDOM.render(
    <RouterPage/>,
    document.getElementById('root')
);