// import React, { useState } from "react";
// import fire from "../../config/Config";
// import "../../styles/Todopage.scss";

// export default function TodoForm() {
//   // const [todo, setTodo] = useState({
//   //     id: "", //firebase unique id
//   //     task: "", // text in todo
//   //     completed: false
//   // });

//   const userId = fire.auth().currentUser.uid;

//   function createTodo(event) {
//     event.preventDefault();

//     const todoText = document.querySelector(".Input-todo-text");
//     const newTodoVal = todoText.value;

//     fire
//       .database()
//       .ref("users/" + userId + "/todolist")
//       .push({
//         todo: newTodoVal,
//       });

//     todoText.value = "";
//     // receiveTodos() // this is causing the whole list to duplicate when a new todo is added
//   }

//   return (
//     <form className="Create-todo-section">
//       <input
//         type="text"
//         className="Input-todo-text"
//         placeholder="Enter your Todo here"
//       />
//       <button onClick={createTodo} className="Input-todo-button">
//         Enter
//       </button>
//     </form>
//   );
// }

import React, { useState } from "react";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      // addTodo({ ...todo, id: uuid.v4() });
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={todo.task} onChange={handleTaskInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
