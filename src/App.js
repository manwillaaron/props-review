import React, { Component } from 'react'
import List from './components/List'
import NewItem from './components/NewItem'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['hello', 'yo yo!', 'wazzup']
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(newItem){
    const newListArr = [newItem, ...this.state.list]
    this.setState({list: newListArr})
  }

  render() {
    return (
      <div className="App">
        <h1>List:</h1>
        <NewItem addItem={this.addItem}/>
        <List list={this.state.list}/>
      </div>
    );
  }

}
export default App;
