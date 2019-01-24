import React, { Component } from 'react';

class Addtask extends Component {
  constructor(props){
    super(props);
    this.state= {
      input:'',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      input : e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.input){
      this.props.newTaskTitle(this.state.input);
    }
    this.setState({input:''});
  }
  render() {
    const inputSt={
      flex: '8',
      padding : '10px',
      border: '1px inset #eee'
    }
    return (
      <form style={{display:'flex'}} onSubmit={this.handleSubmit}>
        <input type='text' style={inputSt} placeholder='What you want to achieve ?' value={this.state.input} onChange={this.handleChange} />
        <button type='submit'  style={{flex: '2'}} className='btn' >Add Task</button>
      </form>
    );
  }
}

export default Addtask;