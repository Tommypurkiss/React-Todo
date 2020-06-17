import React from "react";

import "../styles/Homepage.scss";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Homepage() {
  return (
    <Router>
      <div className="App-homepage">
        <header className="App-header">
          <div className="Logo-div">
            <Link to="/" className="Logo">
              React TODO
            </Link>
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
  return (
    <div>
      <h2>Homepage Content New branch pull request test content</h2>
    </div>
  );
}

export default Homepage;
