import React, { Component } from 'react';
import './App.scss';

import Homepage from './Homepage';
import Todopage from './Todopage';

import fire from './Config';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;



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
        {this.state.user ? (<Todopage/>) : (<Homepage/>)}

      </div>
      




    );
  }
}

export default App;
