import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Donate from './Donate';
import About from './About';
import News from './News';
import NavBar from './NavBar';
import Footer from './Footer';
import Contact from './Contact';
import Disclaimer from './Disclaimer';

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
            <Footer />
          </Route>
          <Route path="/donate">
            <NavBar />
            <Donate />
            <Footer />
          </Route>
          <Route path="/about">
            <NavBar />
            <About />
            <Footer />
          </Route>
          <Route path="/news">
            <NavBar />
            <News news={news}/>
            <Footer />
          </Route>
          <Route path="/contact-us">
            <NavBar />
            <Contact />
            <Footer />
          </Route>
          <Route path="/site-disclaimer">
            <NavBar />
            <Disclaimer />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
