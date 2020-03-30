import React from 'react';
import './Homepage.scss';


import fire from './Config';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Homepage() {


    return(
        <Router>
        <div className="App-homepage">
            <header className="App-header">
            <div className="Logo-div">
                <Link to="/" className="Logo">React TODO</Link>
            </div>
            <div className="Nav-div">
                <nav>
                <ul>
                    <li>
                    
                    <Link to="/login">Login</Link>
                    </li>
                    <li>

                    <Link to="/signup">Signup</Link>

                    </li>
                </ul>
                </nav>
            </div>
            </header>
            



        {/* Switch  */}
        <Switch>
        <Route path="/" exact>
            <HomepageContent />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
        </Switch>

      </div>
      </Router>
    );
}


function HomepageContent() {
    return(
        <div>
            <h2>
                Homepage Content
            </h2>
        </div>
    );
}


function LoginForm() {

    const login = () => {
        const loginEmail = document.querySelector("#login-email").value;
        const loginPassword = document.querySelector("#login-password").value;

        fire.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .then((u) => {
                console.log("Succesfully logged in");
            })
            .catch((err) => {
                console.log("Failed to log in" + err.toString());
            })
    }

    return(
        <div>
            <h2>
                Login Form
            </h2>
                <div className="Login-form-container">
                    <input type="email" id="login-email" placeholder="Email" required/><br/>
                        
                    <input type="password" id="login-password" name="" placeholder="Password" required/> <br/>

                    <input type="submit" onClick={login}></input>
                </div>
                
        </div>
    );
}


function SignupForm() {

    
    const signup = () => {
        const signupUsername = document.querySelector("#signup-username").value;
        const signupEmail = document.querySelector("#signup-email").value;
        const signupPassword = document.querySelector("#signup-password").value;
    
        fire.auth().createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then((u) => {
                console.log("Succesfully signed up", u);
    
                var userId = fire.auth().currentUser.uid;
    
                fire.database().ref("users/" + userId).set({
                    username: signupUsername,
                    email: signupEmail,
                    userid: userId
                    
                })
            })
            .catch((err) => {
                console.log("Failed to log in" + err.toString());
            })
    }


   


    return(
        <div>
            <h2>
                Signup Form
            </h2>
                <div>
                    <input type="text" name="name" id="signup-username" placeholder="Username" required/>  <br/>

                    <input type="email" id="signup-email" placeholder="Email" required/><br/>

                    <input type="password" name="" id="signup-password" placeholder="Password" required/><br/>

                    <input type="password" name="" id="confirm-signup-password" placeholder="Confirm Password" required/><br/>
                    <input type="submit" onClick={signup}></input>                    
                </div>
                
                
        </div>
    );
}



export default Homepage;
