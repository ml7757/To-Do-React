import React from 'react';

class Task extends React.Component{

  constructor(){
    super();
  }

  render(){
    return (
      <div>
      <p>{this.props.taskDescription} {this.props.finishBy}</p>
      </div>
    );
  }
}

export default Task;
