import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link className="NavBar-link" to="/"><b>Home</b></Link>
      <Link className="NavBar-link" to="/usa"><b>States</b></Link>
    </div>
  )
}