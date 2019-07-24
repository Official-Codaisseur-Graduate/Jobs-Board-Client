import React from 'react'
import { Link } from 'react-router-dom'
import './CompaniesList.css'
import ReactPaginate from 'react-paginate'
import './Pagination.css'

const CompaniesList = (props) => {
  const { companies } = props

  if(!companies){
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    )
  }

  const listCompanies = companies && companies.rows.map(company => {

    const companyValues=[["application-count",company.applicationCount],
    ["interview-count",company.interviewCount],
    ["offer-count",company.offerCount]]
    const circles = []

    companyValues.map(circle=> circles.push(
      <svg height="24" width="24">
        <g>
          <circle className={circle[0]} cx="50%" cy="50%" r="12"/>
          <text className="circle-text" x="50%" y="50%" dy=".4em">{circle[1]}</text>
        </g>
      </svg>)
      )

    return (
      <Link key={company.id} to={`/company/${company.id}`} className="companies-list">
        <div className="companies-list-link">
          <li key={company.id} >
            <p><b>{company.name}</b></p>
            <table>
                <tbody>
                  <tr>
                    <td>
                        {circles[0]}
                    </td>
                    <td>
                        {circles[1]}
                    </td>
                    <td>
                        {circles[2]}
                    </td>
                  </tr>
                </tbody>
            </table>          
          </li>
        </div>
      </Link>
    )
  })

  const pagination = companies.pages > 1 &&
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={props.OnPageChange}
      forcePage={props.currentPage}
      pageCount={companies.pages}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{
        textTransform: "uppercase",
        fontSize: 20
      }}>
        Companies
      </h3>
      <form
        onSubmit={props.OnSubmit}
        autoComplete='off'
        className='form-list'>

        <input
          type='text'
          placeholder='search'
          name='companyName'
          value={props.companyName}
          onChange={props.OnSearchChange}>
        </input>

        <button>Submit</button>
      </form>
      <div className='option-list'>
        <label>Sort by: &nbsp;
          <select onChange={props.OnSortChange} value={props.sortBy}>
            <option value='applicationCount'>application count</option>
            <option value='interviewCount'>interview count</option>
            <option value='offerCount'>job offer count</option>
            <option value='jobOfferAfterApplyingRate'>success rate of applications</option>
          </select>
        </label>
        <p></p>
        <div className="legend">
          <div className="legend-table">
              <div className="legend-cell">
                <b>Legend:</b>
              </div>
              <div className="legend-cell">
                <p className="application-count">Applications count</p>
              </div>
              <div className="legend-cell">
                <p className="interview-count">Interviews count</p>
              </div>
              <div className="legend-cell">
                <p className="offer-count">Offers count</p>
              </div>
          </div>
        </div>
        <div className="companies-list-header">
          {listCompanies}
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
      </div>
      {pagination}
    </div>
  )
}

export default CompaniesList