import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withCookies } from "react-cookie";
import Axios from "axios";

import Navbar  from "./components/Navbar";
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Signup from './components/Signup';

class App extends Component {
  state = {
    user: {
      username: null,
      password: null
    },
    posts: []
  }

  componentDidMount = () => {
    const {cookies} = this.props;
    const user = {
      username: cookies.cookies.username,
      password: cookies.cookies.password
    }
    this.setState({
      user
    });

    Axios.post('http://localhost:8000/posts/all', user)
      .then(res => {
        if (res.data){
          this.setState({
            posts: res.data
          });
          // console.log(res.data);
        }
      });
  }

  post = (content) => {
    const {username, password} = this.state.user;
    const data = {
      user: {
        username,
        password
      },
      post:{
        content,
        ofUser: username
      }
    };
    Axios.post('http://localhost:8000/posts', data)
      .then(res => {
        if (res.data){
          // console.log(res.data);
          const newPosts = [res.data, ...this.state.posts ];
          this.setState({
            posts: newPosts
          });
        }
      });
  }

  login = (user) => {
    // console.log(user);
    Axios.post('http://localhost:8000/users/login', user)
      .then(res => {
        // console.log(res);
        if (res) {
          this.props.cookies.set('username', user.username);
          this.props.cookies.set('password', user.password);
          this.setState({user});

          Axios.post('http://localhost:8000/posts/all', user)
            .then(res => {
              if (res.data){
                this.setState({
                  posts: res.data
                });
                // console.log(res.data);
              }
            });
        }
      })
  }

  logout = () => {
    // console.log('logout');
    this.props.cookies.remove('username');
    this.props.cookies.remove('password');
    this.setState({
      user: {
        username: null,
        password: null
      },
      posts: []
    });
  }

  comment = (id, content) => {
    const {username, password} = this.state.user;
    console.log(id, content);
    Axios.put('http://localhost:8000/posts/comment/'+id, {
      username,
      password,
      content
    })
      .then(res => {
        if (res.data){
          const newPosts = this.state.posts.map(post =>{
            if (post._id === id) return res.data;
            return post;
          });
          this.setState({
            posts: newPosts
          });
        }
      });
  }

  signup = (user) => {

  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar 
              logged={ this.state.user.username != null  } 
              logout={this.logout}
            />
            <Switch>
              <Route 
                path="/signup" 
                render={(props) => 
                  <Signup {...props} 
                    user={this.state.user}
                    signup={this.signup}
                  />
                } 
              />
              <Route 
                path="/login" 
                render={(props) => 
                  <LoginForm {...props} 
                    user={this.state.user}
                    login={this.login}
                  />
                } 
              />
              <Route 
                path="/" 
                render={(props) => 
                  <Home {...props} 
                    posts={this.state.posts}
                    logged={ this.state.user.username != null }
                    post={this.post}
                    comment={this.comment}
                  />
                } 
              />
            </Switch>
          </div>
        </BrowserRouter>     
      
    );
  }
}

export default withCookies(App);
