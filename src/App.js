import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import ArticleList from './components/ArticleList';
import './App.css';
import ArticleCreate from './components/ArticleCreate';
import ArticleEdit from './components/ArticleEdit';
import Logout from './components/Logout';
import Protected from './components/ProtectedRoutes'

function App() {
  return (
    <div className="App">
      <Switch>
        <Protected exact path='/articles' component={ArticleList} />
        <Protected exact path='/articles/create' component={ArticleCreate} />
        <Protected exact path='/articles/:id/edit' component={ArticleEdit} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/' render={props => (
          <Login {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
