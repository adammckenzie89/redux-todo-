import { createStore } from "redux";

const initialState = {
  todoTasks: []
};

export const TODO_TASKS = "TODO_TASKS";
export const DELETE_TASKS = "DELETE_TASKS";

function reducer(state = initialState, action) {
  switch (action.type) {
    case TODO_TASKS:
      return {
        ...state,
        todoTasks: [...state.todoTasks, action.payload]
      };
    case DELETE_TASKS:
      let newTask = [...state.todoTasks];
      newTask.splice(action.payload, 1);
      return {
        ...state,
        todoTasks: newTask
      };
    default:
      return state;
  }
}

export default createStore(reducer);
