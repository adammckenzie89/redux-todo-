import React, { Component } from "react";
import store, { TODO_TASKS, DELETE_TASKS } from "../store";
import List from "./List";

class Mainpage extends Component {
  state = {
    inputText: ""
  };
  handleChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };
  handleClick = () => {
    const action = {
      type: TODO_TASKS,
      payload: this.state.inputText
    };
    store.dispatch(action);
  };

  render() {
    return (
      <div>
        <input placeholder="todo item here" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add to List</button>
        <List />
      </div>
    );
  }
}

export default Mainpage;
