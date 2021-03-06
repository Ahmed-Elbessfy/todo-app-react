import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoTask extends Component {
  render() {
    const itemSt = () => {
      return {
        textDecoration: this.props.taskData.complete ? 'line-through' : 'none',
        padding: '10px 15px',
        background : '#eee',
        borderBottom: '1px solid #ccc',
        textTransform : 'capitalize',
        overflow:'hidden'
      }
    }
    const btnSt = {
      background: 'red',
      color: '#fff',
      padding:'5px',
      borderRadius : '3px',
      float: 'right',
      cursor: 'pointer'
    }

    const {id,title} = this.props.taskData;
    return (
      <div style={itemSt()}>
        {/* {console.log(this.props.taskData)} */}
        <input type='checkbox' onChange={this.props.toggleTodoTask.bind(this,id)}/>{' '}
        {title}
        <button style={btnSt} onClick={this.props.delTodoTask.bind(this,id)}>X</button>
      </div>
    );
  }
}

TodoTask.propTypes = {
taskData: PropTypes.object.isRequired,
toggleTodoTask : PropTypes.func.isRequired,
delTodoTask : PropTypes.func.isRequired,
};

export default TodoTask;