import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import NavBar from './components/NavBar';
import SummaryList from './components/SummaryList';
import USA from './components/USA';
import NoMatchPage from './components/NoMatchPage';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://disease.sh/v3/covid-19/all');
      setData(result.data);
    }

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>COVID-19 Tracker</h1>
          <NavBar />
        </header>
        {/* <h3>Summary of COVID-19</h3> */}
        <Switch>
          <Route exact path="/" component={() => { return <SummaryList data={data} /> }} />
          <Route path="/usa" component={USA} />
          <Route path="/*" component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
