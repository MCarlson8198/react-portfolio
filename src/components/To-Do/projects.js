import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(project =>{
        //console.log(project);
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });

    }
    return (
      <div className="form-group">
        <hr />
      <h3>Current Projects</h3>
      {projectItems}
      </div>
    );
  }
}

export default Projects;
