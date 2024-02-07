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
        <Todo />
        <Footer />
      </div>
    );
  }
}

export default TodoList;
