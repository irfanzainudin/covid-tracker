import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link className="NavBar-link" to="/covid-tracker"><b>Home</b></Link>
      <Link className="NavBar-link" to="/covid-tracker/usa"><b>USA</b></Link>
      <Link className="NavBar-link" to="/covid-tracker/malaysia"><b>Malaysia</b></Link>
      <Link className="NavBar-link" to="/covid-tracker/about"><b>About</b></Link>
    </div>
  )
}