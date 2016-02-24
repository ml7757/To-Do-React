import React from 'react';

class Task extends React.Component{

  constructor(){
    super();

  }

  render(){
    return (
      <li>
        {this.props.description} - {this.props.due}
      </li>
    );
  }
}

export default Task;
