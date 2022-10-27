import React from "react";
import "./style.css";

function Todo({ todo, todos, setTodos }) {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="delete-button button"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          Delete
        </button>
        <button
          className="complete-button button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "Undone" : "Done"}
        </button>
      </div>
    </div>
  );
}

export default Todo;