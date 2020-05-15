// import React, { useState, createElement } from "react";
// import fire from "../../config/Config";

// export default function Todo() {
//   //   const [todo, setTodo] = useState({
//   //     id: "",
//   //     task: "",
//   //     completed: false,
//   //   });

//   const userId = fire.auth().currentUser.uid;

//   //   let todoVal = [];
//   //   let keys = [];

//   const db = fire.database();
//   const ref = db.ref("users/" + userId + "/todolist").orderByChild("todo");

//   ref.on("value", receiveTodos, errData);

//   // let todosVal = [];

//   const todoContainer = document.querySelector(".todo-listed");
//   let todoValFormatted = "<ul>";

//   function receiveTodos(todos) {
//     let todoObject = todos.val();
//     console.log("todovalues", todoObject);
//     let keys = Object.keys(todoObject);

//     for (let i = 0; i < keys.length; i++) {
//       const k = keys[i];
//       const todoText = todoObject[k].todo;
//       console.log("todos text", todoText);

//       //   const li = createElement("li", todoText);
//     }
//   }

//   function errData(err) {
//     console.log("error", err);
//   }

//   return <div className="todo-listed"></div>;
// }

import React from "react";

export default function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          color: "black",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}
