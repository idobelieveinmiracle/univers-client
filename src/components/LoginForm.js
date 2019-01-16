import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    username: null,
    password: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    this.props.history.push('/');
  }

  componentDidMount() {
    // console.log("this is login dm");
    // console.log(this.props.user);
    // if (this.props.user.username) this.props.history.push('/');
  }

  render() {
    // console.log('this is login component');
    return (
      <div className="container">
        <div className="card-panel">

          <div className="card-content">
            <h3 className="center">Login</h3>
          </div>

          <form className="card-content" onSubmit={this.handleSubmit}>

            <div className="input-field">
              <label htmlFor="username">Username:</label>
              <input
                type="text" 
                name="username" 
                className="validate" 
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password:</label>
              <input 
                type="text" 
                name="password" 
                className="validate" 
                onChange={this.handleChange}
              />
            </div>

            <button className="btn blue darken-3" type="submit">Login</button>

          </form>

        </div>        
      </div>
    )
  }
}

export default LoginForm;
