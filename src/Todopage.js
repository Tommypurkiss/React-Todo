import React, {useEffect} from 'react';
import './Todopage.scss'
import fire from './Config';

function Todopage() {


  const userId = fire.auth().currentUser.uid;

    useEffect(() => {
      // receiveTodos()
    });

    function logout() {
        fire.auth().signOut();
    }

    function createTodo() {
      const todoText = document.querySelector(".Input-todo-text");
      const newTodoVal = todoText.value 

      fire.database().ref('users/' + userId + "/todolist").push({
        todo: newTodoVal
      });
      
      todoText.value = "";

      // receiveTodos()
    }


    let todoVal = []
    let keys = []

    let divLiOptions = document.createElement('div');
    divLiOptions.classList.add('div-li-options');



    // function receiveTodos() {

    //   const todoContainer = document.querySelector(".Todo-listed");

    //   const db = fire.database();
    //   const ref = db.ref('users/' + userId + '/todolist').orderByChild('todo');

    //   ref.once('value',function(snap) {
    //     snap.forEach(function(item) {
    //       let itemVal = item.val();
    //       keys.push(itemVal);
            
    //     });

    //     let todoValFormatted = "<ul>"


    //     for (let i=0; i < keys.length; i++) {
    //       todoVal.push(keys[i].todo);

    //       // todoValFormatted += "<div class='div-li-loaded'><li>" + todoVal[i] + "</li></div><div class='div-li-options'></div>"
    //       // console.log("todoval i : ", todoVal[i])

    //     }

    //       // todoValFormatted += "</div></ul>"
    //       // todoContainer.innerHTML = todoValFormatted

    //   }); 
    // }

    // const todoContainer = document.querySelector(".Todo-listed");

    const db = fire.database();
    const ref = db.ref('users/' + userId + '/todolist').orderByChild('todo');

    ref.once('value',function(snap) {
      snap.forEach(function(item) {
        let itemVal = item.val();
        keys.push(itemVal);
          
      });

      let todoValFormatted = "<ul>"


      for (let i=0; i < keys.length; i++) {
        todoVal.push(keys[i].todo);

        // todoValFormatted += "<div class='div-li-loaded'><li>" + todoVal[i] + "</li></div><div class='div-li-options'></div>"
          // const element = (
          //   <li>
          //     todoVal[i]
          //   </li>
          // );
          // return element

          const element = <li>todoVal</li>
      }

        // todoValFormatted += "</div></ul>"
        // todoContainer.innerHTML = todoValFormatted

    }); 
        console.log("todoval i : ", todoVal)

        // const listItems = todoVal.map((todo) =>
        //   <li>{todo}</li>
        // );

    // const ulElement = (
    //   <ul>{element}</ul>
    // );    
 
    // function NumberList(props) {
    //   const numbers = props.numbers;
    //   const listItems = numbers.map((number) =>
    //     <li>{number}</li>
    //   );
    //   return (
    //     <ul>{listItems}</ul>
    //   );
    // }
    
    // var fruits = ["apple", "orange", "cherry"];

    // todoVal.forEach(myFunction);

    // function myFunction(item) {
    //   // document.getElementById("demo").innerHTML = item + "<br>"; 
    //   // <li>{item}</li>
    //   const element = (
    //   <li>{item}</li>
    //   );
    //   return element;
    // }

    // const myFunction = (item) => {
    //   <li>{item}</li>

    // }


    // var fruits = ["apple", "orange", "cherry"];
    todoVal.forEach(myFunction);
    
    function myFunction(item) {

      const element = (
        <li>
          {item}
        </li>
      );
      // return element;

      // document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
      document.querySelector('.Todo-listed').innerHTML += item + "<br>"
    }

    // const numbers = [1, 2, 3, 4, 5];


    // function NumberList(props) {
    //   // const numbers = props.numbers;
    //   // const listItems = numbers.map((number) =>
    //   //   <li key={number.toString()}>
    //   //     {number}
    //   //   </li>
    //   // );
    //   const listItems = todoVal.map((number) =>
    //     <li>{number}</li>
    //   );
    //   return (
    //     <ul>{listItems}</ul>
    //   );
    // }
    
    // function NumberList(props) {
    //   const numbers = props.numbers;
    //   const listItems = numbers.map((number) =>
    //     <li>{number}</li>
    //   );
    //   return (
    //     <ul>{listItems}</ul>
    //   );
    // }
    
    const numbersArray = [1, 2, 3, 4, 5];


    // function NumberList(props) {
    //   const numbers = props.numbers;
    //   const listItems = numbers.map((number) =>
    //     <li key={number.toString()}>
    //       {number}
    //     </li>
    //   );
    //   return (
    //     <ul>{listItems}</ul>
    //   );
    // }





  return (
    <div className="Todopage">
        <header className="Todopage-header">
          <div>
            React TODO
          </div>
          <div>
          {/* <button onClick={receiveTodos}>Refresh</button> */}

            <button onClick={logout}>Sign Out</button>
          </div>
        </header>
        <div className="Todopage-content"> 
          <div className="Todopage-list-div">
            <div className="Create-todo-section">
              <input type="text" className="Input-todo-text" placeholder="Enter your Todo here"></input>
              <button onClick={createTodo} className="Input-todo-button">Enter</button>
            </div>
            <div className="Todo-listed">
            {/* <NumberList numbers={numbersArray} /> */}

            {/* <ul>{listItems}</ul> */}
              {/* <myFunction /> */}
              {/* <ul>
                {listItems}
              </ul> */}
              {/* <ul>
                {element}
              </ul> */}
              {/* {newTodoContainer} */}
              {/* <NumberList numbers={numbers} /> */}

            </div>
          </div>
        </div>
      


    </div>
  );
}


export default Todopage;






{/*




    function receiveTodos() {

      const todoContainer = document.querySelector(".Todo-listed");

      const db = fire.database();
      const ref = db.ref('users/' + userId + '/todolist').orderByChild('todo');

      ref.once('value',function(snap) {
        snap.forEach(function(item) {
          let itemVal = item.val();
          keys.push(itemVal);
            
        });

        let todoValFormatted = "<ul>"


        for (let i=0; i < keys.length; i++) {
          todoVal.push(keys[i].todo);

          // todoValFormatted += "<div class='div-li-loaded'><li>" + todoVal[i] + "</li></div><div class='div-li-options'></div>"
          // console.log("todoval i : ", todoVal[i])


          

        }

          // todoValFormatted += "</div></ul>"
          // todoContainer.innerHTML = todoValFormatted

      }); 
    }




*/}