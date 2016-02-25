import React from 'react';
import jQuery from 'jquery';

class Task extends React.Component{
    constructor(){
      super();

    }

    render(){
      return(
        <div>
          <li className="list-group-item">
            <a className="pull-right">"Delete Me"</a>
            <span>{this.props.taskDescription}</span>
            <span>{this.props.dueDate}</span>
          </li>
        </div>
      );
    }
}

export default Task;
