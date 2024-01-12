
import './App.css'
// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import BlogList from './components/Blog/BlogList';
import BlogDetail from './components/Blog/BlogDetail';
import BlogForm from './components/Blog/BlogForm';
import Loginform from './components/Auth/Loginform'
import Registerform from './components/Auth/Registerform'
function App() {
 

  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/login" component={Loginform} />
        <Route path="/register" component={Registerform} />
        <PrivateRoute path="/blogs/create" component={BlogForm} />
        <PrivateRoute path="/blogs/:id" component={BlogDetail} />
        <PrivateRoute path="/blogs" component={BlogList} />
      </Switch>
    </div>
  </Router>
  )
}

export default App
