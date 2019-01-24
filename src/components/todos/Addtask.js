import React, { Component } from 'react';

class Addtask extends Component {
  render() {
    const inputSt={
      flex: '8',
      padding : '10px',
      border: '1px inset #eee'
    }
    return (
      <form style={{display:'flex'}}>
        <input type='text' style={inputSt} placeholder='What you want to achieve ?'/>
        <button type='submit'  style={{flex: '2'}} className='btn'>Add Task</button>
      </form>
    );
  }
}

export default Addtask;