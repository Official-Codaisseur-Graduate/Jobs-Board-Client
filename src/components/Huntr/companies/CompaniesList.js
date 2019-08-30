import React from 'react'
import { Link } from 'react-router-dom'
import './CompaniesList.css'
import ReactPaginate from 'react-paginate'
import '../Pagination.css'

const CompaniesList = (props) => {
  const { companies } = props

  if(!companies){
    return (
      <div style={{ textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    )
  }

  const applicationIconUrl = "https://image.flaticon.com/icons/svg/1284/1284422.svg"
  const interviewIconUrl = "https://image.flaticon.com/icons/svg/755/755192.svg"
  const hiringIconUrl = "https://image.flaticon.com/icons/svg/432/432541.svg"

  const listCompanies = companies.companies && companies.companies.rows.map(company => {

    const companyValues=[
      ["application-count",company.applicationCount],
      ["interview-count",company.interviewCount],
      ["offer-count",company.offerCount]
    ]
    const companyInfo = companyValues.map(value=> 
      <svg height="24" width="24">
        <g>
          <circle className={value[0]} cx="50%" cy="50%" r="12"/>
          <text className="circle-text" x="50%" y="50%" dy=".4em">{value[1]}</text>
        </g>
      </svg>
    )
    const applicationCount = companyInfo[0]
    const interviewCount = companyInfo[1]
    const hiringCount = companyInfo[2]

    return (
      <Link key={company.id} to={`/company/${company.id}`} className="companies-list">
        <div className="companies-list-link">
          <li key={company.id} >
            <p><b>{company.name}</b></p>
            <div className="company-info-table">
              <div className="company-info-cell">
                <img 
                  className="company-info-icons"
                  src={applicationIconUrl}
                  alt="application icon"
                />
              </div>
              <div className="company-info-cell">
              {applicationCount}
              </div>
              <div className="company-info-cell">
                <img 
                  className="company-info-icons"
                  src={interviewIconUrl}
                  alt="interview icon"
                />
              </div>
              <div className="company-info-cell">
              {interviewCount}
              </div>
              <div className="company-info-cell">
                <img 
                  className="company-info-icons"
                  src={hiringIconUrl}
                  alt="hiring icon"
                />
              </div>
              <div className="company-info-cell">
              {hiringCount}
              </div>
            </div>       
          </li>
        </div>
      </Link>
    )
  })

  const pagination = companies.companies.pages > 1 &&
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={props.OnPageChange}
      forcePage={props.currentPage}
      pageCount={companies.companies.pages}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />

  const filterByOffers =  <label className="filter">
                            Show companies with at least
                            <select 
                              className='filter'
                              onChange={props.OnOfferFilter} 
                              value={props.offerFilter}
                            >
                              <option value='0'>0</option>
                              <option value='1'>1</option>
                              <option value='2'>2</option>
                              <option value='3'>3</option>
                            </select>
                            offers
                          </label>
  const filterByExactOffers =   <label className="filter">
                                Show companies with exactly
                                <select 
                                  className='filter'
                                  onChange={props.OnExactOfferFilter} 
                                  value={props.exactOfferFilter}
                                >
                                  <option value='No filter'>No filter</option>
                                  <option value='0'>0</option>
                                  <option value='1'>1</option>
                                  <option value='2'>2</option>
                                </select>
                                offers
                                </label>
  const filterByApplications =  <label className="filter">
                                  Show companies with at least
                                  <select 
                                    className='filter'
                                    onChange={props.OnApplicationFilter} 
                                    value={props.applicationFilter}
                                  >
                                    <option value='5'>5</option>
                                    <option value='4'>4</option>
                                    <option value='3'>3</option>
                                    <option value='2'>2</option>
                                    <option value='1'>1</option>
                                  </select>
                                  applications
                                </label>
  const currentFilter = props.sortBy === "jobOfferAfterApplyingRate"
     ? filterByApplications 
     : filterByOffers

  return (
    
    <div>
      <h2 className="companies-list-header">Companies list</h2>
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
        {currentFilter}{filterByExactOffers}
        <p></p>
        <div className="legend">
          <div className="legend-table">
              <div className="legend-cell">
                <b>Legend:</b>
              </div>
              <div className="legend-cell">
                <img 
                  className="company-info-icons"
                  src={applicationIconUrl}
                  alt="application icon"
                />
              </div>
              <div className="legend-cell">
                <p className="application-count">Applications count</p>
              </div>
              <div className="legend-cell">
                <img 
                  className="company-info-icons"
                  src={interviewIconUrl}
                  alt="interview icon"
                />
              </div>
              <div className="legend-cell">
                <p className="interview-count">Interviews count</p>
              </div>
              <div className="legend-cell">
                <img 
                  className="company-info-icons"
                  src={hiringIconUrl}
                  alt="hiring icon"
                />
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