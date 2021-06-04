import React, { Component } from 'react';
import MyWall from './components/pages/MyWall';
import User from './components/pages/User';
import Login from './components/log/Login';
import Register from './components/log/Register';
import AddMessage from './components/pages/AddMessage';
import Welcome from './components/pages/Welcome';
import Admin from './components/pages/Admin';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import './App.css';



class App extends Component {

  state = {
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              hinafi
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className={'nav-item mur'}>
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3 mur">
            <Switch>
              <Route path='/' exact component={Welcome} />
              <Route path='/mywall' exact component={MyWall} />
              <Route path='/user' exact component={User} />
              <Route path='/addmessage' exact component={AddMessage} />
              <Route path='/register' exact component={Register} />
              <Route path='/Login' exact component={Login} />
              <Route path='/Admin' exact component={Admin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
