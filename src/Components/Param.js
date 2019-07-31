import React, {Component} from 'react'

export default class Param extends Component  {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
  
render() {
  return (
    <div>
        {console.log(this.props)}
     <p>{this.props.match.params.id}</p>
    </div>
  );
}
}