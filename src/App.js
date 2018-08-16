import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import './App.css';
import {Provider } from './Context';
import AddContact from './components/contacts/AddContact';


class App extends Component {
  render() {
    
    return (
      <Provider >
      <div className="App">
      <Header name="Contact Management"/>
      <AddContact />
      <Contacts />
      
     </div>
     </Provider>
    )
  }
}

export default App;
