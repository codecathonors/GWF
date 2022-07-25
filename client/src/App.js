import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

function App() {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   fetch("/news")
  //     .then((r) => r.json())
  //     .then((news) => setNews(news));
  // }, []);

  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          
          
          </Switch>
        </div>
      </Router>
    );

          
  {/* <NewsList news={news}/></Route>
            <Route exact path="/donate"></Route>
            <Route exact path="/about"></Route>
            <Route exact path="/mission"></Route> */
            /* <Route path="/news/:id"> */}

  
}

export default App;
