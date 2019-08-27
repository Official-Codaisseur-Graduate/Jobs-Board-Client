import React from 'react'
import { Link } from 'react-router-dom'
import './css/JobsList.css'
import ReactPaginate from 'react-paginate'
import './css/Pagination.css'

const JobsList = (props) => {
  const { jobs } = props

  if (!jobs) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    )
  }

  const listJobs = jobs.jobs && jobs.jobs.rows.map(job => {
    return (
      <Link key={job.id} to={`/jobs/${job.id}`} className="jobs-list">
        <div>
          <li key={job.id} className="jobs-list-link">
            <p>{job.title}</p>
            <p>{job.employer}</p>
          </li>
        </div>
      </Link>
    )
  })

  // const pagination = jobs.jobs.pages > 1 &&
  //   <ReactPaginate
  //     previousLabel={'previous'}
  //     nextLabel={'next'}
  //     breakLabel={'...'}
  //     breakClassName={'break-me'}
  //     marginPagesDisplayed={2}
  //     pageRangeDisplayed={5}
  //     onPageChange={props.OnPageChange}
  //     forcePage={props.currentPage}
  //     pageCount={jobs.pages}
  //     containerClassName={'pagination'}
  //     subContainerClassName={'pages pagination'}
  //     activeClassName={'active'}
  //   />
  console.log('jobs:', jobs)
  const reactPaginate = <ReactPaginate
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={props.OnPageChange}
    forcePage={props.currentPage}
    pageCount={jobs.pages}
    containerClassName={'pagination'}
    subContainerClassName={'pages pagination'}
    activeClassName={'active'}
  />

  const pagination = () => {
    if (!jobs.jobs) {
      return jobs.pages > 1 &&
        reactPaginate
    }
    return jobs.jobs.pages > 1 &&
      reactPaginate
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="jobs-list-header">
        <div className="jobs-list-div">
          <ul>{listJobs}</ul>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
      </div>
      {/* {pagination} */}
      {pagination()}
    </div>
  )
}

export default JobsList
