import React, { Component } from 'react';
import { Switch, Route, Hash, Link, HashRouter } from 'react-router-dom'

// scenes
import Home from './scenes/Home/index'
import Roster from './scenes/Roster/index'
import Schedule from './scenes/Schedule/index'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
        </Switch>
    </main>
)

export default Main;