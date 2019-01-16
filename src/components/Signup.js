import React, { Component } from 'react'
import Axios from 'axios';

export default class Signup extends Component {
  state = {
    username: null,
    password: null,
    name: null,
    valid: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.valid){
      this.props.signup(this.state);
      this.props.history.push('/login');
    } else {
      alert('username had been taken!');
    }
  }

  handleChangeUsername = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    Axios.get('http://localhost:8000/users/valid/'+e.target.value)
      .then(res => {
        console.log(res.data);
        if (res.data) this.setState({valid: true});
        else this.setState({valid: false});
      });
  }

  render() {
    // console.log('this is login component');
    return (
      <div className="container">
        <h3 className="center">Sign up</h3>
        <div className="card-panel">
          <form className="card-content" onSubmit={this.handleSubmit}>

            <div className="input-field">
              <label htmlFor="username">Username:</label>
              <input
                type="text" 
                name="username" 
                className="validate"
                onChange={this.handleChangeUsername}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password:</label>
              <input 
                type="text" 
                name="password" 
                className="validate"
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                name="name" 
                className="validate" 
                onChange={this.handleChange}
                required
              />
            </div>

            <button className="btn blue darken-3" type="submit">Sign up</button>

          </form>

        </div>        
      </div>
    )
  }
}
