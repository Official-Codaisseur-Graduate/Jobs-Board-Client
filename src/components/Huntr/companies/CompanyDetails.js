import React from 'react'
import { Link } from 'react-router-dom'
import Stats from '../../Stats'

export default function CompanyDetails(props) {
  const { company } = props
  return (
    <div className="companies-details">
      {!company && 'Loading company data...'}

      {company &&
        <div className="comanies-details-list">
          <h1>{company.name}</h1>
          <p>{company.description}</p>
          <p>{company.location}</p> <br />
          {
            company.domain && 
            <a
              href={`https://${company.domain}`} 
              rel="noopener noreferrer"
              target="_blank"
              onClick={props.onClick}>
              more info
            </a>
          }
          <Link to='/companies'>go back</Link>
        </div>
      }
      <div className="companies-details-stats">
        <Stats company={props.company} />
      </div>
    </div>
  )
}