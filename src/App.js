import React from 'react';
import './App.css';
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'

class App extends React.Component {
 
  render() {
    return (
      <div className="App">
      <Header />
      <ShoppingList />
      </div>
    );
  }
}

export default App;
