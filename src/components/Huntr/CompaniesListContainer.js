import React from 'react'
import { connect } from 'react-redux'
import { loadCompanies } from '../../actions/companies'
import CompaniesList from '../Huntr/CompaniesList'
import queryString from 'query-string'


class CompaniesListContainer extends React.Component {
  
  queries = queryString.parse(this.props.location.search);

  state = {
    page: this.queries.page ? this.queries.page : 0,
    sortBy: this.queries.sortBy ? this.queries.sortBy : "applicationCount",
    search: this.props.companies ? this.props.companies.query.search : '',
    offerCount: this.props.companies ? this.props.companies.query.offerCount : 0,
    applicationCount: this.props.companies? this.props.companies.query.applicationCount : 5,
    exactOfferCount: 'No filter'
  }

  componentDidMount() {
    const queries = queryString.parse(this.props.location.search);

    if(!queries.page){
      const newState = {
        page: this.state.page,
        sortBy: this.state.sortBy,
        offerCount: this.state.offerCount,
        applicationCount : this.state.applicationCount
      }
      this.props.loadCompanies(newState)    
    }
    else
    {
      this.props.loadCompanies(queries)
    }
  }

  componentDidUpdate(){
    const { page, sortBy, offerCount, applicationCount, exactOfferCount } = 
      this.props.companies.query
    const condition1 = this.state.sortBy !== sortBy
    const condition2 = this.state.offerCount !== offerCount
    const condition3 = this.state.applicationCount !== applicationCount
    const condition4 = exactOfferCount && this.state.exactOfferCount === 'No filter'
    const condition5 = this.state.page !== page
    if(this.state.search===''){
      if(condition1||condition2||condition3||condition4||condition5){
        const newState = {
          page: this.state.page,
          sortBy: this.state.sortBy,
          offerCount: this.state.offerCount,
          applicationCount : this.state.applicationCount
        }
        this.props.loadCompanies(newState)
      }
      
      if(this.state.exactOfferCount !== 'No filter'){
        if(this.state.exactOfferCount !== exactOfferCount){
          const exactOfferFilterState = {
            page: this.state.page,
            sortBy: this.state.sortBy,
            exactOfferCount: this.state.exactOfferCount,
            offerCount: this.state.offerCount,
            applicationCount: this.state.applicationCount
          }
          this.props.loadCompanies(exactOfferFilterState)
        }
      }
    }
  }

  OnPageChange = (event) => {
    const { selected } = event;
    const { sortBy, offerCount, exactOfferCount } = this.props.companies.query
    const pageAndSortByQueries = `/companies?page=${selected}&sortBy=${sortBy}`

    this.setState({
      page: selected
    })

    if(offerCount>0){
      this.props.history.push(
        `${pageAndSortByQueries}&filterByOffers=${offerCount}`
      )
    }
    else
    {
      if(exactOfferCount>=0){
        this.props.history.push(
          `${pageAndSortByQueries}&exactFilterByOffers=${exactOfferCount}`
        )
      }
      else
      { this.props.history.push(pageAndSortByQueries) }
    }
  }

  OnSortChange = (event) => {
    const newSortBy = event.target.value
    const { page, offerCount, exactOfferCount } = this.state
    const pageAndSortByQueries = `/companies?page=${page}&sortBy=${newSortBy}`

    this.setState({
      sortBy: newSortBy
    })

    if(offerCount>0){
      this.props.history.push(
        `${pageAndSortByQueries}&filterByOffers=${offerCount}`
      )
    }
    else
    {
      if(exactOfferCount>=0){
        this.props.history.push(
          `${pageAndSortByQueries}&exactFilterByOffers=${exactOfferCount}`
        )
      }
      else
      { this.props.history.push(pageAndSortByQueries) }
    }
  }

  OnSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  OnSubmit = (event) => {
    event.preventDefault()
    this.props.loadCompanies(this.state)
    if(this.state.search !== ''){
      this.props.history.push(
        `/companies?search=${this.state.search}`
      )
    }
  }

  OnOfferFilter = (event) => {
    const { page,sortBy } = this.props.companies.query
    this.setState({
      offerCount: event.target.value
    })
    this.props.history.push(
      `/companies?page=${page}&sortBy=${sortBy}&filterByOffers=${event.target.value}`
    )

  }

  OnExactOfferFilter = (event) => {
    const { page, sortBy } = this.props.companies.query
    this.setState({
      exactOfferCount: event.target.value
    })
    this.props.history.push(
      `/companies?page=${page}&sortBy=${sortBy}&exactFilterByOffers=${event.target.value}`
    )
  }

  OnApplicationFilter = (event) => {
    const { page, sortBy } = this.props.companies.query
    this.setState({
      applicationCount: event.target.value
    })
    this.props.history.push(
      `/companies?page=${page}&sortBy=${sortBy}&filterByApplications=${event.target.value}`
    )

  }

  render() {
    
    return (
      <div>
        <CompaniesList 
          companies={this.props.companies}
          OnPageChange={this.OnPageChange}
          OnSortChange={this.OnSortChange}
          OnOfferFilter={this.OnOfferFilter}
          OnApplicationFilter={this.OnApplicationFilter}
          OnExactOfferFilter={this.OnExactOfferFilter}
          OnSubmit={this.OnSubmit}
          OnSearchChange={this.OnSearchChange}
          companyName={this.state.search}
          sortBy={this.state.sortBy}
          currentPage={parseInt(this.state.page)}
          offerFilter={this.state.offerCount}
          applicationFilter={this.state.applicationCount}
          exactOfferFilter={this.state.exactOfferFilter}
        />        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  companies: state.companies
})

export default connect(mapStateToProps, { loadCompanies })(CompaniesListContainer) 