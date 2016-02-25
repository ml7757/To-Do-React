import './stylesheets/components.scss';
import React from 'react';
import TaskList from './TaskList';

class Project extends React.Component{

    constructor(){
      super();
    }

    render(){
      return(
        <div>
          <h1>Our Tasks</h1>
          <TaskList  />
        </div>
      );
    };
}

export default Project;
