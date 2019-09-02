import React from 'react'
import { Link } from 'react-router-dom'
import './css/JobsList.css'

export default function JobsDetails(props) {
  const { job } = props

  return (
    <div className="jobs-details">
      {!job && 'Loading job data...'}

      {job &&
        <div className="jobs-details-list">
          <h1>{job.employer} is looking for a</h1>
          <h3>{job.title}</h3>
          <p>{job.url}</p>
          <br></br>
          {job.url &&
            <a href={job.url} rel="noopener noreferrer" target="_blank">
              more info
            </a>
          }
          <Link to={'/jobs'}> go back</Link>
        </div>
      }
    </div>
  )
}