import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li>
            <Link className="nav_link" to={`/`}>Jobs</Link>
          </li>
          <span>|</span>
          <li>
            <Link className="nav_link" to={`/companies/0/interviewCount/`}>Companies</Link>
          </li>
          <span>|</span>
          <li>
            <Link className="nav_link" to={'/graduates'}>Graduates</Link>
          </li>
        </ul>
      </div>
    );
  }
}


export default NavBar