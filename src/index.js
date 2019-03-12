import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/Todo/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";
import CounterContainer from "./components/Counter/CounterContainer";

const store = new TodoListModel();

render(
  <div>
    <DevTools />
    <TodoList store={store} />
    <hr />
    <CounterContainer />
    <hr />
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
