import React, { useEffect, useState } from "react";
import "../styles/Todopage.scss";
import fire from "../config/Config";
import TodoForm from "./todo-components/TodoForm";
import TodoList from "./todo-components/TodoList";
import Todo from "./todo-components/Todo";

function Todopage() {
  function logout() {
    fire.auth().signOut();
  }

  const [todos, setTodos] = useState([]);

  // const userId = fire.auth().currentUser.uid;

  // useEffect(() => {
  //   receiveTodos();
  // });

  // function createTodo(event) {
  //   event.preventDefault();

  //   const todoText = document.querySelector(".Input-todo-text");
  //   const newTodoVal = todoText.value;

  //   fire
  //     .database()
  //     .ref("users/" + userId + "/todolist")
  //     .push({
  //       todo: newTodoVal,
  //     });

  //   todoText.value = "";
  //   // receiveTodos() // this is causing the whole list to duplicate when a new todo is added
  // }

  // let todoVal = [];
  // let keys = [];

  // let divLiOptions = document.createElement("div");
  // divLiOptions.classList.add("div-li-options");

  // function receiveTodos() {
  //   const todoContainer = document.querySelector(".Todo-listed");

  //   const db = fire.database();
  //   const ref = db.ref("users/" + userId + "/todolist").orderByChild("todo");

  //   ref.once("value", function (snap) {
  //     snap.forEach(function (item) {
  //       //     // console.log("item key: ", item.key) // THIS GETS THE UNIQUE ID KEY IMPORTANT!
  //       let itemVal = item.val();
  //       keys.push(itemVal);
  //     });

  //     let todoValFormatted = "<ul>";

  //     for (let i = 0; i < keys.length; i++) {
  //       todoVal.push(keys[i].todo);

  //       todoValFormatted +=
  //         "<div class='div-li-loaded'><li>" +
  //         todoVal[i] +
  //         "</li></div><div class='div-li-options'></div>";
  //       console.log("todoval i : ", todoVal[i]);
  //     }

  //     todoValFormatted += "</div></ul>";
  //     todoContainer.innerHTML = todoValFormatted;
  //   });
  // }

  return (
    <div className="Todopage">
      <header className="Todopage-header">
        <div>React TODO</div>
        <div>
          {/* <button onClick={receiveTodos}>Refresh</button> */}

          <button onClick={logout}>Sign Out</button>
        </div>
      </header>
      <div className="Todopage-content">
        <TodoForm />
        {/* <TodoList /> */}
        <Todo />
      </div>
    </div>
  );
}

export default Todopage;
