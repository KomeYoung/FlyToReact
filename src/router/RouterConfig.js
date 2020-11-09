import Page1 from '../demo/index1';
import Page2 from '../demo/index2';
import Page3 from '../demo/index3';
import React from 'react';
import {Router, Route, Switch, Redirect, NavLink} from 'react-router-dom';
import {createHashHistory} from "history";

const history = createHashHistory();

class RouterConfig extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <div>
                        <NavLink to='/home'>page1</NavLink>
                        <NavLink to='/city'>page2</NavLink>
                        <NavLink to='/index'>page3</NavLink>
                    </div>
                    <Switch>
                        <Route path='/' exact render={() => (
                            <Redirect to='/Page1'/>
                        )}/>
                        <Route path='/Page1' component={Page1}/>
                        <Route path='/Page2' component={Page2}/>
                        <Route path='/Page3' component={Page3}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouterConfig;