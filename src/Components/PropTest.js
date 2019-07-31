import React, { Component } from 'react';
import { string, object } from 'prop-types'

import '../App.css';

class PropTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:"",
            clicked:true
        }
    }

    static defaultProps = {
        exampleProp1: "Hello!",
        exampleProp2: {
            stuff: 1
            }
        }

    static propTypes = {
        model: object.isRequired,
        title: string
        }

render() {
  return (
    <div>
        <p>{this.props.exampleProp1}</p>
        <p>{this.props.exampleProp2.stuff}</p>
   


    </div>
  );
}
}

export default PropTest;
