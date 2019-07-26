import React from '../../../../node_modules/react'
import { Link } from '../../../../node_modules/react-router-dom'
import './css/JobsList.css'

export default function JobsDetails(props) {
  const { selectedJob } = props
  const JobsDetails = !selectedJob
    ? "Loading... "
    : <li key={selectedJob.id} className="jobs-details">
      <h1>{selectedJob.company} is looking for a</h1>
      <h3>{selectedJob.title}</h3>
      <p>{selectedJob.summary}</p>
      <p>This job is available in {selectedJob.location}</p>
      <p>This job was posted: {selectedJob.postDate}</p><br/>
      <a href={selectedJob.url} rel="noopener noreferrer" target="_blank">more info</a>
      <Link to={'/'}>back</Link>
    </li>

  return (
    <div className="jobs-details-header">
      <h3><u>DETAILS</u></h3>
      <div className="jobs-details-list">
        <ul>{JobsDetails}</ul>
      </div>
    </div>
  )
}