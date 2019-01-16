import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Post extends Component {
  state = {
    comment: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.comment(this.props.post._id, this.state.comment);
    this.setState({
      comment: ''
    });
  }

  render() {
    const comments = this.props.post.comments.map(commemt =>(
      <div className="card-content" key={ commemt._id }>
        <p>
          <strong>
            <Link to={ "/user/"+commemt.username }>{ commemt.username }</Link>
          </strong>
          { " "+commemt.content }
        </p>
      </div>
    ));
    return (
      <div className="card-panel">
        <div className="card-content">
          <h4 className="card-title">
            <Link to={ "/user/"+this.props.post.ofUser }>{ this.props.post.ofUser }</Link>
          </h4>
          <h5>{ this.props.post.content }</h5>
          { comments }
          <form className="card-content" onSubmit={ this.handleSubmit }>
            <div className="input-field">
              <label htmlFor="comment">comment</label>
              <input value={ this.state.comment } type="text" name="comment" onChange={ this.handleChange } />
            </div>
          </form>
        </div>
      </div>
    )}
}
