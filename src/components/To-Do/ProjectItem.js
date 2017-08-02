import React, { Component } from 'react';


class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id)
  }

  render() {
    return (
      <div id="form-control">
        <ul className="form-control toDo-list">
        <li className="form-text category-items toDo-label">
          <strong>{this.props.project.title}</strong>:
        </li>
        <li className="form-text category-items toDo-category">
          {this.props.project.category}
        </li>
        <li className="form-text category-items toDo-btn">
          <button className="btn btn-danger ToDoBtn" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
        </li>
      </ul>
    </div>
    );
  }
}

export default ProjectItem;
