import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from 'redux'

const initialState = {
  count: 0,
  friends: [],
  loading: false
}

const reducer = (oldstate = initialState, action) => {
  console.log("oldState: ", oldstate)
  console.log("action: ", action)
  switch(action.type){
    case "INCREMENT":
      return {...oldstate, count: oldstate.count + action.payload }
    case "DECREMENT":
      const newState = {...oldstate, count: oldstate.count - action.payload }
      return newState
    default:
      return oldstate

  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

class App extends Component {
  
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
  
  render() {
    return (
      <div className="App">
        <Header  />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
  };
  
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {

  increment = () => {
    store.dispatch({type: "INCREMENT", payload: 1})
  };
  
  decrement = () => {
    store.dispatch({type: "DECREMENT", payload: 1})
  };
  incrementBy3 = () => {
    store.dispatch({type: "INCREMENT", payload: 3})
  };
  
  decrementBy3 = () => {
    store.dispatch({type: "DECREMENT", payload: 3})
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> -1 </button>
        <button onClick={this.increment}> +1 </button>
        <button onClick={this.decrementBy3}> -3 </button>
        <button onClick={this.incrementBy3}> +3 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// debugger