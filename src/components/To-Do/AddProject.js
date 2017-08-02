import React, { Component } from 'react';
import uuid from 'uuid';
import '../../App.css';

class AddProject extends Component {
constructor() {
  super();
  this.state = {
    newProject: {}
  }
}

static defaultProps = {
  categories: [' Web Design', ' Web Development', ' Mobile Development', ' Other']
}

handleSubmit(e) {
  if (this.refs.title.value === "") {
    alert("Title is required");
  } else {
    this.setState({newProject:{
      id:uuid.v4(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function() {
      // console.log(this. state);
      this.props.addProject(this.state.newProject);
    });
  }
  e.preventDefault();
}

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div id="form-control">
          <h2 className="form-text">Add Project</h2>
          <form onSubmit={this.handleSubmit.bind(this)} >
            <div>
              <label className="form-text">Title</label><br />
              <input className="form-control text-center" type="text" ref="title" placeholder="Enter a title" />
            </div>
            <div>
              <label id="catLabel" className="form-text">Category</label><br />
              <select id="catOpt" className="form-text text-center" ref="category">
              {categoryOptions}
              </select>
            </div>
            <br />
            <input id="ToDoSubmitBtn" type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default AddProject;
