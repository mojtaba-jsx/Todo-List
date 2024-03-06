import React, { useState } from "react";

import Header from "./Header/Header";
import "./TodoList.css";

import Footer from "./Footer/Footer";
import Todo from "./Todo/Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [status, setStatus] = useState("all");

  // *Methods
  const todoTitleHandler = (event) => {
    setTodoTitle(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    let newTodoObject = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    setTodos((prevState) => {
      return [...prevState, newTodoObject];
    });
    setTodoTitle("");
  };

  const removeTodo = (todoId) => {
    let newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const editTodo = (todoId) => {
    let newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    setTodos(newTodos);
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <Header />

      <div className="todo-input">
        <form className="todo-input-box" onSubmit={addTodo}>
          <input
            onChange={todoTitleHandler}
            type="text"
            id="myInput"
            class="input-group__input"
            placeholder="WriteTodoPressEnter"
            value={todoTitle}
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
        </form>

        <select className="todo-status" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">UnCompleted</option>
        </select>
      </div>

      <div className="todos">
        <div className="todos__wrapper">
          {status === "completed" &&
            todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <Todo
                  {...todo}
                  onRemove={removeTodo}
                  onEdit={editTodo}
                  key={todo.id}
                />
              ))}

          {status === "uncompleted" &&
            todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <Todo
                  {...todo}
                  onRemove={removeTodo}
                  onEdit={editTodo}
                  key={todo.id}
                />
              ))}

          {status === "all" &&
            todos.map((todo) => (
              <Todo
                {...todo}
                onRemove={removeTodo}
                onEdit={editTodo}
                key={todo.id}
              />
            ))}
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

export default TodoList;
