import './stylesheets/components.scss';
import React from 'react';
import jQuery from 'jquery';
import TaskList from './TaskList';

class Project extends React.Component{

    constructor(){
      super();

    }



    render(){
      return(
          <h1>I am the project</h1>
      );
    };
}

export default Project;
