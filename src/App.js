import React from 'react';
import './App.css';
import Nav from './components/nav';
import Accueil from './components/accueil';
import Presentation from './components/presentation';
import User from './components/user';
import Dynamique from './components/dynamique';
import Blog from './components/Blog';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component= {Accueil}/>
            <Route exact path="/presentation" component= {Presentation} />
            <Route exact path="/blog" component= {Blog} />
            <Route exact path="/blog/:id" component= {User} />
            <Route exact path="/:erreur" component= {Dynamique} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
