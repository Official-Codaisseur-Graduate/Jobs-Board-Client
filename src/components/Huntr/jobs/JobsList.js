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

  // console.log('Joblist PROPS.jobs:', props.jobs)
  // 11: const listJobs = jobs.jobs && jobs.jobs.rows.map(job => {
  //   return (
  //     <Link key={job.id} to={`/jobs/${job.id}`} className="jobs-list">
  //       <div>
  //         <li key={job.id} className="jobs-list-link">
  //           <p>{job.title}</p>
  //           <p>{job.employer}</p>
  //         </li>
  //       </div>
  //     </Link>
  //   )
  // })

  const listJobs = jobs.jobs.rows
  ? jobs.jobs.rows.map(job => {
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
  
  : jobs.jobs.jobs.map(job => {
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

  const reactPaginate = <ReactPaginate
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    breakClassName={'break-me'}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={props.OnPageChange}
    forcePage={props.currentPage}
    
    pageCount={jobs.jobs.pages}
    containerClassName={'pagination'}
    subContainerClassName={'pages pagination'}
    activeClassName={'active'}
  />

  const pagination = jobs.jobs
    ? jobs.jobs.pages > 1 && reactPaginate   
    : jobs.pages > 1 && reactPaginate

  return (
    <div style={{ textAlign: 'center' }}>
      {console.log('JOB props:', props)}

      <form
      id='jobsQuery'
      onSubmit={props.onSubmitFilter}
      autoComplete='off'
      className="form-list">

      <label>
        Role: &nbsp;
        <input
          type="text"
          name="role"
          value={props.inputrole}
          onChange={props.onChangeFilter}
        />
      </label>

      <label>
        City: &nbsp;
        <input
          type="text"
          name="city"
          value={props.inputcity}
          onChange={props.onChangeFilter}
        />
      </label>

      <input type="submit" />
    </form>

      <div className="jobs-list-header">
        <div className="jobs-list-div">
          <ul>{listJobs}</ul>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
      </div>
      {pagination}
    </div>
  )
}

export default JobsList
