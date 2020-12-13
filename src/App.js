import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios';
import Alert from './components/layout/Alert';

import GithubState from './context/github/GithubState';


const App = () => {
 
const [loading,setLoading] = useState(false)
const [alert,setAlert] = useState(null)
const [repos,setRepos] = useState([])
 

 

  const getUserRepos = async(username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setLoading(false);
    setRepos(res.data);
  }



  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => setAlert(null), 5000)
  }

  
    return (
      <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search  
                    
                    setAlert={showAlert}
                  />
                  <Users/>
                </Fragment>
              )} />
              <Route exact path='/about' component={About}/>   
              <Route exact path='/user/:login' render={props => (
                <User {...props} 
              
                getUserRepos={getUserRepos}
             
                repos={repos} 
                 />
              )}/>      
            </Switch>

          </div>
        </div>
      </Router>
      </GithubState>
    );
  
}

export default App;
