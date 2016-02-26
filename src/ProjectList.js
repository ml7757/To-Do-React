import './stylesheets/components.scss';
import React from 'react';
import jQuery from 'jquery';
import ProjectItem from './ProjectItem';
import ProjectForm from './ProjectForm';

class ProjectList extends React.Component{

  constructor(){
    super();

    this.state = {
      projects: []
    }
  }

  renderProjects(){

    // we need to rename ourselves
    var component = this;

    // we get the data from the backend via ajax using json
    jQuery.getJSON("http://localhost:8888/projects.json", function(data){
      console.log(data);
      component.setState({
        projects: data.projects
      });
    });

  }

  componentDidMount(){
    this.renderProjects();
  }

    render(){
        return (
          <div>
            <h1>Projects</h1>
            <ProjectForm onChange={this.renderProjects.bind(this)} />
            <table className="table table-hover well">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.state.projects.map(function(project, i){
              return(
                <ProjectItem key={project.id}
                         id={project.id}
                         name={project.name}
                         description={project.description}
                         createdAt={project.created_at}
                         onChange={this.renderProjects.bind(this)}
                 />
              );
            }, this)}
            </tbody>
            </table>

          </div>
        );
    }
  }

export default ProjectList;
