import React, { Component } from 'react'

class SimpleCounterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         toggle: false
      }
    }

    changeToggle = () =>{
        this.setState((prevstate)=>{
            console.log("toggle clicked")
            return{
                toggle: !prevstate.toggle
            }
        })
    }

    increment=()=> {
        if(this.state.toggle == true){
            this.setState((prevstate)=>{
                return{
                    count: prevstate.count+1
                }
            })
        }
    }
    
    
  render() {
    console.log("This is Simple Component")
    const count = this.state.count
    return (
      <div>
        <h1>Simple Component</h1>
        <h3>{count}</h3>
        <button onClick={this.changeToggle}>Set toggle</button>
        <button onClick={this.increment}>Counter</button>
      </div>
    )
  }
}

export default SimpleCounterComponent
