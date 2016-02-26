import './stylesheets/components.scss';
import React from 'react';
import jQuery from 'jquery';
import TaskList from './TaskList';

class Project extends React.Component{

    constructor(){
      super();

      this.state ={
        project: []
      }
    }

    renderProject(){
      // we want to set the state to the project with corresponding id from the backend
      var component = this;
      var projectId = this.props.params.projectId;

      jQuery.getJSON(`https://checktaskmanager.herokuapp.com/projects/${projectId}`, function(data){
        console.log(data);
        component.setState({
          project: data.project
        });
      });
    }

    componentDidMount(){
      this.renderProject();
    }

    render(){
      return(
        <div className="well">
          <h1>{this.state.project.name}</h1>
          <h2>{this.state.project.description}</h2>
          <TaskList projectId={this.props.params.projectId} />
        </div>
      );
    };
}

export default Project;
