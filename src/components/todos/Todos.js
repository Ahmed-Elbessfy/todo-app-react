import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoTask from './TodoTask';

class Todos extends Component {
  render() {
    return (
      <React.Fragment>
        {/* {console.log(this.props.todotasks)} */}
        {this.props.todotasks.map(task => {
          return (
            <TodoTask key={task.id} taskData={task} toggleTodoTask={this.props.toggleTodos} delTodoTask={this.props.delTodos} />
          )
        })}
      </React.Fragment>
    );
  }
}

Todos.propTypes = {
  todotasks : PropTypes.array.isRequired
};

export default Todos;