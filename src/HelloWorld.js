import React, { Component } from 'react';

class HelloWorld extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.greeting}</h1>
                <p>My name is ... test</p>
            </div>
        );
    }
  }
  
  export default HelloWorld;