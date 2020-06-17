import React, { useState, useEffect } from "react";
import fire from "../../config/Config";

// // import Todo from "./Todo";

// export default function TodoList({ todos }) {
//   return (
//     <ul>
//       {/* <Todo />
//       {todos.map((todo) => (
//         <Todo key={todo.id} todo={todo} />
//       ))} */}
//     </ul>
//   );
// }

// import React from "react";
// import Todo from "./Todo";

// export default function TodoList({ todos, toggleComplete, removeTodo }) {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <Todo
//           key={todo.id}
//           todo={todo}
//           toggleComplete={toggleComplete}
//           removeTodo={removeTodo}
//         />
//       ))}
//     </ul>
//   );
// }

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

function GetTodos() {
  // const [todos, setTodos] = useState({
  //   id: "",
  //   task: "",
  // });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const userId = fire.auth().currentUser.uid;
    const ref = fire
      .database()
      .ref("users/" + userId + "/todolist")
      .orderByChild("todo");

    ref.once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        console.log("childsnapshot: ", childSnapshot);
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val().todo;

        console.log("childkey: ", childKey);
        console.log("childdata: ", childData);
        // ...

        const newTodos = childSnapshot.forEach((item) => ({
          id: item.key,
          ...item.val(),
        }));

        setTodos(newTodos);
      });
    });
  }, []);

  return todos;
}

const TodoList = () => {
  const todos = GetTodos();

  return (
    <div>
      <ul>
        <li>random</li>
        {/* {todos.map((item) => (
          <li key={item.id}>{item}</li>
        ))} */}
        {/* {todos.map((item) => {
          return <li>{item}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default TodoList;
