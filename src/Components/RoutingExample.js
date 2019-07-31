import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { string, object } from 'prop-types'
import Home from './Home'
import Param from './Param'

import '../App.css';

export default class RoutingExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:""
        }
    }

    handleClick = (e) => {
        this.setState({
            text:e.target.value
        })
    }

render() {
  return (
    <div>
      <Router>
      
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/props">Props</Link>
            <br></br>
            <Link to={"/params/"+this.state.text}>Params</Link>
         
            <Route exact path="/" component={Home} />
        
            <Route path="/props" render={(props) => <Home name="Text as Props" />} />

            <Route path="/params/:id" component={Param} />
        
    </Router> 

    <input onChange={this.handleClick} />

    </div>
  );
}
}




