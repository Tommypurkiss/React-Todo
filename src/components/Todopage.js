// import React, { useEffect, useState } from "react";
// import "../styles/Todopage.scss";
// import fire from "../config/Config";
// import TodoForm from "./todo-components/TodoForm";
// import TodoList from "./todo-components/TodoList";
// import Todo from "./todo-components/Todo";

// const LOCAL_STORAGE_KEY = "react-todo-list-todos";

// function Todopage() {
//   function logout() {
//     fire.auth().signOut();
//   }
//   const userId = fire.auth().currentUser.uid;

//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (storageTodos) {
//       setTodos(storageTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   }, [todos]);

//   function addTodo(todo) {
//     setTodos([todo, ...todos]);
//   }

//   function toggleComplete(id) {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }
//         return todo;
//       })
//     );
//   }

//   function removeTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <div className="Todopage">
//       <header className="Todopage-header">
//         <div>React TODO</div>
//         <div>
//           {/* <button onClick={receiveTodos}>Refresh</button> */}

//           <button onClick={logout}>Sign Out</button>
//         </div>
//       </header>
//       <TodoForm addTodo={addTodo} />

//       <div className="Todopage-content">
//         <TodoList
//           todos={todos}
//           toggleComplete={toggleComplete}
//           removeTodo={removeTodo}
//         />
//         {/* <TodoForm /> */}
//         {/* <TodoList /> */}
//         {/* <Todo /> */}
//         {/* <div className="Todo-listed"></div> */}
//       </div>
//     </div>
//   );
// }

// export default Todopage;

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

// const button = document.querySelector(".button");
// // button.innerHTML("Hello");

// // button.onclick = function () {
// //   alert("big message");
// // };

// function myfunction() {
//   alert("big message");
// }

// function receiveTodos() {
//   const todoContainer = document.querySelector(".Todo-listed");

//   const db = fire.database();
//   const ref = db.ref("users/" + userId + "/todolist").orderByChild("todo");

//   ref.on("value", function (snap) {
// snap.forEach(function (item) {
//   //     // console.log("item key: ", item.key) // THIS GETS THE UNIQUE ID KEY IMPORTANT!
//   let itemVal = item.val();
//   keys.push(itemVal);
// });

//     let todoValFormatted = "<ul>";

//     for (let i = 0; i < keys.length; i++) {
//       todoVal.push(keys[i].todo);

//       todoValFormatted +=
//         "<div class='div-li-loaded'><li>" +
//         todoVal[i] +
//         "</li></div><div class='div-li-options'></div>";
//         // <button class='button' onclick='myfunction'>click</button>
//       // " + {button} +"
//       // <button onClick='myfunction()'>click</button>
//       console.log("todoval i : ", todoVal[i]);
//     }

//     todoValFormatted += "</div></ul>";
//     todoContainer.innerHTML = todoValFormatted;
//   });
// }

import React, { useState, useEffect } from "react";
import "../styles/Todopage.scss";
import fire from "../config/Config";
import TodoForm from "./todo-components/TodoForm";
import TodoList from "./todo-components/TodoList";

export default function Todopage() {
  const userId = fire.auth().currentUser.uid;
  const db = fire.database();

  function logout() {
    fire.auth().signOut();
  }

  // function createTodo(event) {
  //   event.preventDefault();

  //   const todoText = document.querySelector(".Input-todo-text");
  //   const newTodoVal = todoText.value;

  //   fire
  //     .database()
  //     .ref("users/" + userId + "/todolist")
  //     .push({
  //       todo: newTodoVal,
  //       // completed: false,
  //     });

  //   todoText.value = "";
  //   // receiveTodos() // this is causing the whole list to duplicate when a new todo is added
  // }

  // const [todo, setTodo] = useState([
  //   {
  //     id: [],
  //     task: [],
  //   },
  // ]);

  // const ref = db.ref("users/" + userId + "/todolist").orderByChild("todo");
  // const ref = db.ref("users/" + userId + "/todolist").orderByChild("todo");

  // ref.once("value", function (snapshot) {
  //   snapshot.forEach(function (childSnapshot) {
  //     var childKey = childSnapshot.key;
  //     var childData = childSnapshot.val();

  //     console.log("childkey: ", childKey);
  //     console.log("childdata: ", childData);
  //     // ...
  //   });
  // });

  // ref.on("value", getTodoData, errData);

  // function getTodoData(todo) {
  //   let todos = todo.val();
  //   // console.log("Todos: ", todos);
  //   let todoKeys = Object.keys(todos);
  //   console.log("Todo Keys: ", todoKeys);

  //   for (let i = 0; i < todoKeys.length; i++) {
  //     let k = todoKeys[i];
  //     let todoVal = todos[k].todo;
  //     console.log("Todoval: ", todoVal);

  //     // setTodo({
  //     //   id: k,
  //     //   task: todoVal,
  //     // });

  //   }
  // }

  // function errData(err) {
  //   console.log("error: ", err);
  // }

  // useEffect(() => {
  //   let itemKey = "";
  //   let itemTaskVal = "";
  //   ref.on("value", function (snap) {
  //     snap.forEach(function (item) {
  //       // let itemKey = item.key;
  //       itemKey = item.key;
  //       // console.log("itemkey", itemKey); //gets the todo key

  //       // let itemTaskVal = item.val().todo;
  //       itemTaskVal = item.val().todo;
  //       console.log("itemTaskVal", itemTaskVal); //gets the task value

  //       // if (setTodo !== todo) {
  //       //   setTodo({
  //       //     id: itemKey,
  //       //     task: itemTaskVal,
  //       //   });
  //       // }

  //       // const updateState = (boolean) => {
  //       //   if (boolean !== todo) {
  //       //     setTodo(boolean);
  //       //   }
  //       // };
  //       // updateState();

  //       // const updateState = (boolean) => {
  //       //   if (boolean !== todo) {
  //       //     setTodo({
  //       //       id: itemKey,
  //       //       task: itemTaskVal,
  //       //     });
  //       //   }
  //       // };
  //       // updateState();
  //     });
  //   });
  // });

  // let itemKey = "";
  // let itemTaskVal = "";
  // ref.on("value", function (snap) {
  //   snap.forEach(function (item) {
  //     // let itemKey = item.key;
  //     itemKey = item.key;
  //     // console.log("itemkey", itemKey); //gets the todo key

  //     // let itemTaskVal = item.val().todo;
  //     itemTaskVal = item.val().todo;
  //     console.log("itemTaskVal", itemTaskVal); //gets the task value
  //   });
  // });

  // ref.on("value", (snapshot) => {
  //   snapshot.forEach((child) => {
  //     let itemKey = child.key;
  //     let itemTaskVal = child.val().todo;
  //     console.log("itemTaskVal", itemTaskVal); //gets the task value
  //   });
  // });

  // function receiveTodos() {
  //   ref.on("value", function (snapshot) {
  //     snapshot.forEach(function (item) {
  //       // console.log("item key: ", item.key) // THIS GETS THE UNIQUE ID KEY IMPORTANT!
  //       let itemKey = item.key;
  //       let itemVal = item.val();
  //       console.log("itemVal", itemVal);
  //       // keys.push(itemVal);

  //       this.setTodo({
  //         id: itemKey,
  //         task: itemVal,
  //       });
  //     });
  //   });
  // }
  // receiveTodos();
  // ^ may have to be in useeffect?

  // useEffect(() => {
  //   // receiveTodos();

  //   ref.on("value", function (snapshot) {
  //     snapshot.forEach(function (item) {
  //       // console.log("item key: ", item.key) // THIS GETS THE UNIQUE ID KEY IMPORTANT!
  //       let itemKey = item.key;
  //       let itemVal = item.val().todo;
  //       console.log("itemVal", itemVal);
  //       // keys.push(itemVal);

  //       // setTodo({
  //       //   id: itemKey,
  //       //   task: itemKey.todo,
  //       // });
  //     });
  //   });
  // });

  // function TodoList({ todos }) {}

  return (
    <div>
      <header className="Todopage-header">
        <div>React TODO</div>
        <div>
          <button onClick={logout}>Sign Out</button>
        </div>
      </header>

      <TodoForm />
      <TodoList />
    </div>
  );
}
