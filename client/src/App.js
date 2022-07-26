import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Donate from './Donate';
import About from './About';
import News from './News';

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
            <Home news={news}/>
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News news={news}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

          
  {/* <NewsList news={news}/></Route>
    
            <Route exact path="/mission"></Route> */
            /* <Route path="/news/:id"> */}

  
}

export default App;
