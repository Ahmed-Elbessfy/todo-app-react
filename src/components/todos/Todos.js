import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTask from './TodoTask';

class Todos extends Component {
  render() {
    return (
      <ul>
        {/* {console.log(this.props.todotasks)} */}
        {this.props.todotasks.map(task => {
          return (
            <li key={task.id}>
              <TodoTask taskData={task}/>
            </li>
          )
        })}
      </ul>
    );
  }
}

Todos.propTypes = {
  todotasks : PropTypes.array.isRequired
};

export default Todos;