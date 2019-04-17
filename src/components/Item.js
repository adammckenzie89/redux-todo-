import React, { Component } from "react";
import store, { DELETE_TASKS } from "../store";

class Item extends Component {
  deleteItem(index) {
    store.dispatch({
      type: DELETE_TASKS,
      payload: index
    });
  }
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.deleteItem}>delete</button>
      </div>
    );
  }
}

export default Item;
