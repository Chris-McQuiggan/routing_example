import React, {Component} from 'react'

export default class Home extends Component  {

    static defaultProps = {
        name: "Home"
        }
  
render() {
  return (
    <div>
     <p>{this.props.name}</p>
    </div>
  );
}
}