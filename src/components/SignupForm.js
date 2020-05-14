import React from 'react';
import fire from '../config/Config';



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

export default SignupForm;


