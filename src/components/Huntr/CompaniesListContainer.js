import React from 'react'
import { connect } from 'react-redux'
import { loadCompanies } from '../../actions/companies'
import CompaniesList from '../Huntr/CompaniesList'

class CompaniesListContainer extends React.Component {

  state = {
    page: this.props.match.params.page,
    sortBy: this.props.match.params.sortBy,
    search: this.props.match.params.search ? this.props.match.params.search : '',
    offerCount: this.props.match.params.offers? 
                  this.props.match.params.offerCount : 0,
    applicationCount: this.props.match.params.applicationCount?
                        this.props.match.params.applicationCount : 5
  }

  componentDidMount() {
    this.props.loadCompanies(this.state)
  }

  componentDidUpdate(prevProps){
    const locationChanged = this.props.location !== prevProps.location
    if(locationChanged){
      const { page, sortBy, search,offerCount,applicationCount } = this.props.match.params
      const updatedState = {
        page,
        sortBy,
        search: search ? search : '',
        offerCount,
        applicationCount
      }
      this.setState(updatedState)
      this.props.loadCompanies(updatedState)
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
    const filterValue = event.target.value
    this.props.history.push(
      `/companies/${this.state.page}/${this.state.sortBy}/filterByOffers/${filterValue}`
    )
  }

  OnApplicationFilter = (event) => {
    const filterValue = event.target.value
    this.props.history.push(
      `/companies/${this.state.page}/${this.state.sortBy}/filterByApplications/${filterValue}`
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