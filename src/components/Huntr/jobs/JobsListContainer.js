import React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { loadJobs } from '../../../actions/jobs'
import { searchJobs } from '../../../actions/jobs'
import JobsList from './JobsList'

class JobsListContainer extends React.PureComponent {
  queries = queryString.parse(this.props.location.search)

  state = {
    page: this.queries.page ? this.queries.page : 0,
    sortBy: this.queries.sortBy ? this.queries.sortBy : "title",
    role: this.props.jobs ? this.props.jobs.query.role : '',
    city: this.props.jobs ? this.props.jobs.query.city : '',
    inputrole: "",
    inputcity: "",
  }

  componentDidMount() {
    const queries = queryString.parse(this.props.location.search)

    if (!queries.page) {
      const newState = {
        page: this.state.page,
        sortBy: this.state.sortBy,
        role: this.state.role,
        city: this.state.city
      }
      this.props.loadJobs(newState)
    }
    else {
      this.props.loadJobs(queries)
    }
  }

  componentDidUpdate() {
    const { page, sortBy, role, city } = this.props.jobs.query
    const condition2 = this.state.page !== page
    const condition1 = this.state.sortBy !== sortBy
    const condition3 = this.state.inputrole !== role
    const condition4 = this.state.inputcity !== city

    if ((condition2 || condition1) && (!condition3 && !condition4)) {
      const newState = {
        page: this.state.page,
        sortBy: this.state.sortBy,
        role: this.state.inputrole,
        city: this.state.inputcity
      }
      this.props.loadJobs(newState)
    }
  }

  OnPageChange = (event) => {
    const { selected } = event;
    const { sortBy } = this.props.jobs.query
    const pageAndSortByQueries = `/jobs?page=${selected}&sortBy=${sortBy}`

    this.setState({
      page: selected
    })

    this.props.history.push(pageAndSortByQueries)
  }

  OnSortChange = (event) => {
    const newSortBy = event.target.value
    const { page } = this.state
    const pageAndSortByQueries = `/jobs?page=${page}&sortBy=${newSortBy}`

    this.setState({
      sortBy: newSortBy
    })

    this.props.history.push(pageAndSortByQueries)
  }

  OnSubmit = (event) => {
    event.preventDefault()
    this.props.loadJobs(this.state)
    if (this.state.search !== '') {
      this.props.history.push(
        `/jobs?search=${this.state.search}`
      )
    }
  }

  onChangeFilter = (event) => {
    this.setState({
      ['input' + event.target.name]: event.target.value
    })
  }

  onSubmitFilter = (event) => {
    event.preventDefault()
    this.props.searchJobs({
      page: 0,
      role: this.state.inputrole,
      city: this.state.inputcity,
    })

    this.setState({
      role: '',
      city: ''
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ textTransform: "uppercase", fontSize: 20 }}>
          List of Jobs
        </h3>

        <JobsList
          jobs={this.props.jobs}
          inputrole={this.state.inputrole}
          inputcity={this.state.inputcity}
          OnPageChange={this.OnPageChange}
          OnSubmit={this.OnSubmit}
          OnSearchChange={this.OnSearchChange}
          jobTitle={this.state.search}
          sortBy={this.state.sortBy}
          currentPage={parseInt(this.state.page)}
          onSubmitFilter={this.onSubmitFilter}
          onChangeFilter={this.onChangeFilter}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  loadJobs,
  searchJobs
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsListContainer)