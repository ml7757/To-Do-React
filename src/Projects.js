import './stylesheets/components.scss';
import React from 'react';
import Project from './Project';

class Projects extends React.Component{

  constructor(){
    super();

    this.state = {
      projects: []
    }

  }

    render(){
        return (
          <div>
            <h1>Projects</h1>

            <Project />
          </div>
        );
    }
  }

export default Projects;
