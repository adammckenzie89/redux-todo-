import { createStore } from "redux";

const initialState = {
  todoTasks: []
};

export const LIST_ITEMS = "LIST_ITEMS";

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LIST_ITEMS:
      return {
        ...state,
        todoTasks: [...state.todoTasks, action.payload]
      };
    default:
      return state;
  }
}

export default createStore(reducer);
