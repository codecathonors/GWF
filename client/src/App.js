import React, { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Donate from './Donate';
import About from './About';
import News from './News';
import NavBar from './NavBar';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news")
      .then((r) => r.json())
      .then((news) => setNews(news));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home news={news}/>
          </Route>
          <Route path="/donate">
            <NavBar />
            <Donate />
          </Route>
          <Route path="/about">
            <NavBar />
            <About />
          </Route>
          <Route path="/news">
            <NavBar />
            <News news={news}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
