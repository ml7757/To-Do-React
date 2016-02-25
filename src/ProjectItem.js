import './stylesheets/components.scss';
import React from 'react';
import TaskList from './TaskList';

class ProjectItem extends React.Component{

    constructor(){
      super();
    }

    render(){
      return(
          <tr>
            <th>{this.props.name}</th>
            <td>{this.props.description}</td>
            <td><a className="btn btn-danger btn-xs">x</a></td>
          </tr>
      );
    };
}

export default ProjectItem;
