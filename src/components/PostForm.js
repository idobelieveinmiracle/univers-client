import React, { Component } from 'react'

export default class PostForm extends Component {
  state = {
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.post(this.state.content);
    this.setState({content: ''});
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="card-panel">
        <form className="card-content" onSubmit={ this.handleSubmit }>

          <div className="input-field">
            <label htmlFor="content">Post here</label>
            <textarea value={this.state.content} onChange={ this.handleChange } name="content" className="materialize-textarea"></textarea>
          </div>
          <button className="btn blue darken-3" type="submit">Post</button>
        </form>
      </div>
    )
  }
}
