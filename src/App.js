
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <>
      <Router>
      <div>
       <Navbar/>
       <Routes>
      <Route path="/" element= {<News country="in" category="general" pageSize={9} apikey={process.env.REACT_APP_NEWS_API_KEY}/>}/>
      <Route path="/business" element= {<News country="in" category="business" pageSize={9} apikey={process.env.REACT_APP_NEWS_API_KEY}/>}/>
      <Route path="/entertainment" element= {<News country="in" category="entertainment" pageSize={9} apikey={process.env.REACT_APP_NEWS_API_KEY}/>}/>
      <Route path="/health" element= {<News country="in" category="health" pageSize={9} apikey={process.env.REACT_APP_NEWS_API_KEY}/>}/>
      <Route path="/science" element= {<News country="in" category="science" pageSize={9} apikey={process.env.REACT_APP_NEWS_API_KEY}/>}/>
      <Route path="/sports" element= {<News country="in" category="sports" pageSize={9}/>} apikey={process.env.REACT_APP_NEWS_API_KEY}/>
      <Route path="/technology" element= {<News country="in" category="technology" pageSize={9} apikey={process.env.REACT_APP_NEWS_API_KEY}/>}/>
       </Routes>
      </div>
      </Router>
      </>
    );
  }
}

export default App;


