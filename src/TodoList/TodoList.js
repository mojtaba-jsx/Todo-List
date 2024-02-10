import React, { Component } from "react";

import Header from "./Header/Header";
import "./TodoList.css";
import Footer from "./Footer/Footer";
import Todo from "./Todo/Todo";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      status: "select option",
      todoTitle: "inputValue",
      todos: [{ completed: true, id: 1, title: "inputvalue" }],
    };
  }

  render() {
    return (
      <div>
        <Header />

        <div className="todo-input">
          <label class="input-group__label" for="myInput">
            My Label
          </label>
          <input
            type="text"
            id="myInput"
            class="input-group__input"
            value="This is my input"
          />
        </div>

        <div className="todos">
          <div className="todos__wrapper">
            <Todo />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default TodoList;
