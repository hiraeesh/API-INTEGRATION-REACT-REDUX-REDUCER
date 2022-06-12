import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      value:''
    };
    this.textinput=React.createRef()
  }
  componentDidMount(){
    this.textinput.current.blur()
  }

  handle = e =>{
    e.preventDefault();
    this.setState({value:this.textinput.current.value});
    console.log(this.textinput.current.value)
  };
  render() {
    return (
      <>
      <h1>This is PASSWORD {this.state.value}</h1>
     <form onSubmit={this.handle}>
    
     PASSWORD:
     <input type='text' ref={this.textinput} />
     <input type='submit' value='submit' />
     </form>
    </>
    )

  }
}
