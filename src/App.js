import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/Notfound';


import {Provider } from './Context';
import AddContact from './components/contacts/AddContact';



class App extends Component {
  render() {
    
    return (
      <Provider >
        <Router>
        
      <div className="App">
      <Header name="Contact Management"/>
      <div className="container">
      <Switch>
        <Route exact path ='/' component={Contacts}/>
        <Route exact path ='/about' component={About}/>
        <Route exact path ='/contact/add' component={AddContact}/>
        <Route component={NotFound}/>
        
      </Switch>
      
     </div>
     </div>
     </ Router>
     </Provider>
    )
  }
}

export default App;
