import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch, Redirect, NavLink} from 'react-router-dom'
import Page1 from './demo/index1';
import Page2 from './demo/index2';
import Page3 from './demo/index3';
import Page4 from './demo/props';
import RouterJs from './router/RouterJs';
import RouterConfig from "./router/RouterConfig";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
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

ReactDOM.render(<RouterConfig/>, document.getElementById('root'))