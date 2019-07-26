import React from 'react'
import { connect } from 'react-redux'
import { loadCompanies } from '../../actions/companies'
import CompaniesList from '../Huntr/CompaniesList'

class CompaniesListContainer extends React.Component {

  state = {
    page: this.props.match.params.page,
    sortBy: this.props.match.params.sortBy,
    search: this.props.match.params.search ? this.props.match.params.search : '',
    offerCount: this.props.companies? this.props.companies.offerCount : 0,
    applicationCount: this.props.companies? this.props.companies.applicationCount : 5
  }

  componentDidMount() {
    this.props.loadCompanies(this.state)
  }

  componentDidUpdate(prevProps){
    const { location, companies } = this.props
    const locationChanged = location !== prevProps.location
    const offerFilter = this.state.offerCount
    const applicationFilter = this.state.applicationCount
    const filterByOffers = offerFilter !== companies.currentOffertCount
    const filterByApplications = applicationFilter !== companies.currentApplicationCount

    if(locationChanged){
      const { page, sortBy, search, offerCount, applicationCount } = this.props.match.params
      const updatedState = {
        page,
        sortBy,
        search: search ? search : '',
        offerCount: offerCount ? offerCount : "0",
        applicationCount: applicationCount ? applicationCount : "5"
      }
      this.setState(updatedState)
      this.props.loadCompanies(updatedState)
    }

    if(filterByOffers || filterByApplications){
      this.props.loadCompanies(this.state)
    }
  }

  OnPageChange = (event) => {
    const { selected } = event;
    this.props.history.push(
      `/companies/${selected}/${this.state.sortBy}/${this.state.search}`
      )
  }

  OnSortChange = (event) => {
    const sortBy = event.target.value
    this.props.history.push(
      `/companies/${this.state.page}/${sortBy}/${this.state.search}`
    )
  }

  OnSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  OnSubmit = (event) => {
    event.preventDefault()
    if(this.state.search !== undefined){
      this.props.history.push(
        `/companies/0/${this.state.sortBy}/${this.state.search}`
      )
    }
  }

  OnOfferFilter = (event) => {
    this.setState({
      offerCount: event.target.value
    })
  }

  OnApplicationFilter = (event) => {
    this.setState({
      applicationCount: event.target.value
    })
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
          OnSubmit={this.OnSubmit}
          OnSearchChange={this.OnSearchChange}
          companyName={this.state.search}
          sortBy={this.state.sortBy}
          currentPage={parseInt(this.state.page)}
          offerFilter={this.state.offerCount}
          applicationFilter={this.state.applicationCount}
        />        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  companies: state.companies
})

export default connect(mapStateToProps, { loadCompanies })(CompaniesListContainer) 