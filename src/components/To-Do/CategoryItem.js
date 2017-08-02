import React, { Component } from 'react';

class CategoryItem extends Component {
  render() {
    return (
        <li>
          <strong>{this.props.project.category}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}></a>
        </li>
    );
  }
}

export default CategoryItem;
