import './stylesheets/components.scss';
import React from 'react';
import TaskList from './TaskList';

class ProjectItem extends React.Component{

    constructor(){
      super();
    }

    render(){
      return(
        <div>
          <h2>{this.props.name}</h2>

        </div>
      );
    };
}

export default ProjectItem;
