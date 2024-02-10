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
      todoTitle: "",
      todos: [{ completed: true, id: 1, title: "inputvalue" }],
    };
  }

  inputHandler(event) {
    this.setState({
      todoTitle: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <Header />

        <div className="todo-input">
          <div className="todo-input-box">
            <input
              onChange={(event) => this.inputHandler(event)}
              type="text"
              id="myInput"
              class="input-group__input"
              placeholder="Enter Todo"
              value={this.state.todoTitle}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>

          <select className="todo-status">
            <option value="all">All</option>
            <option value="complete">Completed</option>
            <option value="uncomplete">UnCompleted</option>
          </select>
        </div>

        <div className="todos">
          <div className="todos__wrapper">
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </div>
        </div>

        <div className="shape-3">
          <svg
            width="220"
            height="228"
            viewBox="0 0 220 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="110"
              cy="114"
              rx="110"
              ry="114"
              fill="url(#paint0_linear_2024_51)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2024_51"
                x1="110"
                y1="0"
                x2="110"
                y2="228"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C58AFF" />
                <stop offset="1" stop-color="#6322A4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TodoList;
