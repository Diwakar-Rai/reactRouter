import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    state = {
        count:0
    }

    Increment = () => {
        this.setState({count: this.state.count + 1})
    }

    //! It is executed only once in the lifecycle
    componentDidMount() {
        console.log("I am componentDidMount and i am rendering only once")
    }

    //! It is used to update whenver the state changes
    componentDidUpdate() {
        console.log("I am componentDidUpdate")
        document.title = `clicked ${this.state.count} times`
    }
    render() {
      console.log("I am render method and I can render many times...")
    return (
      <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.Increment}>Increment</button>
      </div>
    )
  }
}
