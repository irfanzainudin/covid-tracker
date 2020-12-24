import React, { useState, useEffect } from 'react';
import axios from 'axios';
import USAMap from 'react-usa-map';

export default function USA() {
  const [statesData, setStatesData] = useState([]);
  const [selectedState, setSelectedState] = useState("Pick a state");
  const [casesTotal, setCasesTotal] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [activeCases, setActiveCases] = useState(0);
  const [tests, setTests] = useState(0);
  const [population, setPopulation] = useState(0);

  useEffect(() => {
    const fetchStatesData = async () => {
      const result = await axios('https://disease.sh/v3/covid-19/states');
      setStatesData(result.data);
    }

    fetchStatesData();
  }, []);

  const mapHandler = (event) => {
    setSelectedState(event.target.textContent);
    statesData.map(state => {
      if (state.state.localeCompare(selectedState) == 0) {
        setCasesTotal(state.cases);
        setDeaths(state.deaths);
        setRecovered(state.recovered);
        setActiveCases(state.active);
        setTests(state.tests);
        setPopulation(state.population);
      }
    })
  }

  const statesCustomConfig = () => {
    return {
      "WA": {
        fill: "orange"
      },
      "OR": {
        fill: "navy"
      },
      "CA": {
        fill: "#cc0000"
      },
      "ID": {
        fill: "#cc0000"
      },
      "NV": {
        fill: "orange"
      },
      "NJ": {
        fill: "navy",
        // clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    }
  }

  return (
    <div>
      {/* TODO */}
      <h1>United States of America</h1>
      <h3>{ selectedState || "Unknown state" }</h3>
      <div>
        <div className="USA-stat-container">
          <span className="USA-stat">Cases: { casesTotal || "0" }</span>
          <span className="USA-stat">Active: { activeCases || "0" }</span>
        </div>
        <div className="USA-stat-container">
          <span className="USA-stat">Recovered: { recovered || "0" }</span>
          <span className="USA-stat">Deaths: { deaths || "0" }</span>
        </div>
        <div className="USA-stat-container">
          <span className="USA-stat">Population: { population || "0" }</span>
          <span className="USA-stat">Tests: { tests || "0" }</span>
        </div>
      </div>
      <USAMap
        // customize={statesCustomConfig()}
        title="USA"
        width={document.documentElement.clientWidth}
        height={document.documentElement.clientHeight}
        onClick={mapHandler}
      />
    </div>
  )
}