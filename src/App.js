import React, { Component } from 'react';
import './App.css';


import Header from './components/layout/Header';
import Todos from './components/todos/Todos';
import Addtask from './components/todos/Addtask';

import uuid from 'uuid';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todolist : [
        {
          id:uuid.v4(),
          title: 'task 1',
          complete: false
        },
        {
          id:uuid.v4(),
          title: 'task 2',
          complete: false
        },
        {
          id:uuid.v4(),
          title: 'task 3',
          complete: false
        },
        {
          id:uuid.v4(),
          title: 'task 4',
          complete: false
        },
      ]
    }
    this.toggleTask = this.toggleTask.bind(this);
    this.delTask = this.delTask.bind(this);
  }

  //Toggle completing task status
  toggleTask(id){
    // console.log(id)
    this.setState({
      todolist : this.state.todolist.map(task => {
        if(task.id === id){
          task.complete = !task.complete
        }
        return task
      })
    })
  }

  //Delete task
  delTask(id){
    // console.log(id)
    this.setState({
      todolist : [...this.state.todolist.filter(task => task.id !== id)]
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Addtask />
        <Todos 
          todotasks = {this.state.todolist}
          toggleTodos = {this.toggleTask}
          delTodos = {this.delTask}
        />
      </div>
    );
  }
}

export default App;
