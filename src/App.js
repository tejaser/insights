import Navbar from './Navbar';
//import {Route, Router} from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';
import React, {Component} from 'react';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
//var Route = ReactRouter.Route;
class App extends Component {
  render() {
    return (
      <Router>
      <div className='app'>
       
        <Navbar />
        <Main />  
        <Footer />
      </div>
      </Router>
     
    )
  }
}

export default App;