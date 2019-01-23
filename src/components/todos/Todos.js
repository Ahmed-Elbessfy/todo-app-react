import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
      <ul>
        {/* {console.log(this.props.todotasks)} */}
        {this.props.todotasks.map(task => {
          return (
            <li key={task.id}>
              
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