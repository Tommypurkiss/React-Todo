import React from 'react';
import fire from '../config/Config';

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

export default LoginForm;