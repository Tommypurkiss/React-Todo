import React, {useEffect} from 'react';
import './Todopage.scss'
import fire from './Config';

function Todopage() {


  const userId = fire.auth().currentUser.uid;

    useEffect(() => {
      receiveTodos()

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

      receiveTodos()
    }


    let todoVal = []
    let keys = []

    let divLiOptions = document.createElement('div');
    divLiOptions.classList.add('div-li-options');


    let todoValFormatted = "<ul>"

    function receiveTodos() {

      const todoContainer = document.querySelector(".Todo-listed");

      const db = fire.database();
      const ref = db.ref('users/' + userId + '/todolist').orderByChild('todo');

      ref.once('value',function(snap) {
        snap.forEach(function(item) {
          let itemVal = item.val();
          keys.push(itemVal);
            
        });

        // let todoValFormatted = "<ul>"

        for (let i=0; i < keys.length; i++) {
          todoVal.push(keys[i].todo);

          todoValFormatted += "<div class='div-li-loaded'><li>" + todoVal[i] + "</li></div><div class=div-li-options></div>"

          // Button

          // const buttonTest = document.createElement("BUTTON")
          // buttonTest.appendChild(document.createTextNode("Molest me"));

          // buttonTest.onclick = function() {
          //   alert("message");
          // }


          // const buttonTestOH = buttonTest.outerHTML

          // todoValFormatted += buttonTestOH

          // todoValFormatted += "</div>"
         

        }


          todoValFormatted += "</ul>"
          todoContainer.innerHTML = todoValFormatted

          
      });

      
    }

    console.log("todoval i : ", todoVal)




       // Button

          // const buttonTest = document.createElement("BUTTON")
          // buttonTest.appendChild(document.createTextNode("Molest me"));

          // buttonTest.onclick = function() {
          //   alert("message");
          // }


          // const buttonTestOH = buttonTest.outerHTML

          // todoValFormatted += buttonTestOH

          // todoValFormatted += "</div>"
   


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
              
            </div>

          </div>
        </div>
      


    </div>
  );
}


export default Todopage;

