import React, { Component } from 'react';
import './App.scss';

import Homepage from './components/Homepage';
import Todopage from './components/Todopage';

import fire from './config/Config';


class App extends Component {


  constructor(props) {

  
    super(props);
  
    this.state = {
      user: null,
    }
  
    this.authListener = this.authListener.bind(this);
    
  }
  
  componentDidMount() {
    this.authListener();

    
  }
  
  authListener(){
    fire.auth().onAuthStateChanged(( user ) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null});
      }
    });
  }
  


  render(){
    return(

      <div>
        {/* If the user has already logged in before, you go straight to the Todopage, else you go to the Homepage */}
        {this.state.user ? (<Todopage/>) : (<Homepage/>)}
      </div>

    );
  }
}

export default App;
