import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li>
            <Link className="nav_link" to={`/`}>Home</Link>
          </li>
          <span>|</span>
          <li>
            <Link className="nav_link" to={`/jobs`}>Jobs</Link>
          </li>
          <span>|</span>
          <li>
            <Link className="nav_link" to={`/companies`}>Companies</Link>
          </li>
          <span>|</span>
          <li>
            <Link className="nav_link" to={'/graduates'}>Graduates</Link>
          </li>
        </ul>
      </div>
    )
  }
}


export default NavBar