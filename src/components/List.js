import React, { Component } from "react";
import store from "../store";
import Item from "./Item";

class List extends Component {
  state = {
    todoTasks: store.getState().todoTasks
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        todoTasks: store.getState().todoTasks
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.todoTasks.map(val => {
          return <Item text={val} deleteItem={this.deleteItem} />;
        })}
      </div>
    );
  }
}

export default List;
