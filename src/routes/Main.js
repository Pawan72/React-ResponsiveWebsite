import React, {Component} from 'react'
import Home from '../components/Home'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'
import Error from '../components/Error'
import {Switch, Route} from 'react-router-dom'

export default class Main extends Component{
    render(){
        return (
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
        );
        
    }
}