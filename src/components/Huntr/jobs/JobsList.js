import React from 'react'
import { Link } from 'react-router-dom'
import './css/JobsList.css'

export default function JobsList(props) {
  const { jobs } = props
  const JobsList = !jobs
    ? "Loading... "
    : jobs.map((job, index) =>
      <Link key={index} to={`/jobs/${job.company}`}
        className="jobs-list">
        <li key={index} className="jobs-list-link">
          {job.title}
        </li>
      </Link>
    )

  return (
    <div className="jobs-list-header">
      <div className="jobs-list-div">
        <ul>{JobsList}</ul>
      </div>
    </div>
  )
}