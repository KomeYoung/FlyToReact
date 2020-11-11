import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom'
import Page1 from './demo/index1';
import Page2 from './demo/index2';
import Page3 from './demo/index3';
import NumList from './demo/key_demo';
import Page4 from './demo/props';
import RouterJs from './router/RouterJs';
import RouterConfig from "./router/RouterConfig";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <NavLink to='/home'>page1</NavLink>
                        <NavLink to='/city2'>page2</NavLink>
                        <NavLink to='/index'>page3</NavLink>
                    </div>
                    {/*<switch>*/}
                    <Route path='/home' component={Page1}></Route>
                    <Route path="/city" component={Page2}></Route>
                    <Route path="/index" component={Page3}></Route>
                    {/*<Route path="/" component={Page1}></Route>*/}
                    {/*<Route path="/xiangqin/:id" component={ Xiangqin }></Route>*/}
                    {/*<Route*/}
                    {/*    path="/card"*/}
                    {/*    render = {*/}
                    {/*        (props) => {*/}
                    {/*            if(fakeAuth.isAuthenticated){*/}
                    {/*                return <Card />*/}
                    {/*            }else{*/}
                    {/*                return <Redirect to="/login"></Redirect>*/}
                    {/*            }*/}
                    {/*        }*/}
                    {/*    }*/}
                    {/*></Route>*/}

                    <Redirect to="/home"></Redirect>

                    {/*</switch>*/}
                        <NavLink   to='/home'>page1</NavLink>
                        <NavLink  to='/city2'>page2</NavLink>
                        <NavLink  to='/index'>page3</NavLink>
                        <NavLink  to='/props'>props</NavLink>
                    </div>
                   {/*<switch>*/}
                       <Route path='/home' component={Page1}></Route>
                       <Route path="/city" component={Page2}></Route>
                       <Route path="/index" component={Page3}></Route>
                       <Route path="/props" component={Page4}></Route>
                       {/*<Route path="/" component={Page1}></Route>*/}
                       {/*<Route path="/xiangqin/:id" component={ Xiangqin }></Route>*/}
                       {/*<Route*/}
                       {/*    path="/card"*/}
                       {/*    render = {*/}
                       {/*        (props) => {*/}
                       {/*            if(fakeAuth.isAuthenticated){*/}
                       {/*                return <Card />*/}
                       {/*            }else{*/}
                       {/*                return <Redirect to="/login"></Redirect>*/}
                       {/*            }*/}
                       {/*        }*/}
                       {/*    }*/}
                       {/*></Route>*/}

                       <Redirect to="/home"></Redirect>

                   {/*</switch>*/}
                </div>

            </HashRouter>
        )
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleSubmit(event) {
        alert(event.target.value);
        event.preventDefault();
    };
    handleChange(event) {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <div>
                <input type='text' value={this.state.value}
                       onChange={(event => this.setState({value:event.target.value}))}/>

                <form onSubmit={(event) => this.handleSubmit(event)}
                >

                    <input type="submit" value="提交" />
                </form>
            </div>

        );
    }

}

class NameForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

ReactDOM.render(<NameForm/>, document.getElementById('root'))