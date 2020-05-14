import React, { useState } from "react";
import fire from "../../config/Config";

export default function TodoForm() {
  // const [todo, setTodo] = useState({
  //     id: "", //firebase unique id
  //     task: "", // text in todo
  //     completed: false
  // });

  const userId = fire.auth().currentUser.uid;

  function createTodo(event) {
    event.preventDefault();

    const todoText = document.querySelector(".Input-todo-text");
    const newTodoVal = todoText.value;

    fire
      .database()
      .ref("users/" + userId + "/todolist")
      .push({
        todo: newTodoVal,
      });

    todoText.value = "";
    // receiveTodos() // this is causing the whole list to duplicate when a new todo is added
  }

  return (
    <form className="Create-todo-section">
      <input
        type="text"
        className="Input-todo-text"
        placeholder="Enter your Todo here"
      />
      <button onClick={createTodo} className="Input-todo-button">
        Enter
      </button>
    </form>
  );
}
