import React from 'react';

class Task extends React.Component{

  constructor(){
    super();

  }

  render(){
    return (
      <li>
        {this.props.task_description} - {this.props.duedate}
      </li>
    );
  }
}

export default Task;
