import React from 'react'
import queryString from 'query-string'
import { loadJobs } from '../../../actions/jobs'
import { connect } from 'react-redux'
import JobsList from './JobsList'
import JobsFormContainer from './JobsFormContainer'

class JobsListContainer extends React.PureComponent {
  queries = queryString.parse(this.props.location.search)

  state = {
    page: this.queries.page || 0,
    sortBy: this.queries.sortBy || 'title',
    search: this.queries.search || ''
  }
  
  componentDidMount() {
    const urlParams = queryString.parse(this.props.location.search)
    // console.log('URLparams', page, search, sortBy);

    this.props.loadJobs(urlParams)
    this.setState({
      page: urlParams.page,
      search: urlParams.search,
      sortBy: urlParams.sortBy
    })
    // if (this.state.search !== '') {
    //   this.props.history.push(
    //     `/jobs-list/1/${urlParams}`
    //   )
    // }
  }

  componentDidUpdate(prevProps) {
    console.log('HERE', this.props.jobs.query)
    // const locationChanged = this.props.location !== prevProps.location
    const paramsChanged = this.props.location.search !== prevProps.location.search
    if (paramsChanged) {
      const newParams = queryString.parse(this.props.location.search)
      this.setState({
        page: newParams.page,
        search: newParams.search,
        sortBy: newParams.sortBy
      })
      this.props.loadJobs(newParams)
    }
  }

  OnPageChange = (event) => {
    const { selected } = event;
    this.props.history.location.search = queryString.stringify({
      page: selected,
      search: this.state.search,
      sortBy: this.state.sortBy
    })

    this.setState({
      page: selected,
      search: this.state.search,
      sortBy: this.state.sortBy
    })
    // this.props.history.push(
    //   `/jobs/${selected}/${this.state.sortBy}/${this.state.search}`
    // )
  }

  OnSortChange = (event) => {
    const sortBy = event.target.value
    this.props.history.push(
      `/jobs/${this.state.page}/${sortBy}/${this.state.search}`
    )
  }

  OnSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  OnSubmit = (event) => {
    event.preventDefault()
    if (this.state.search !== undefined) {
      this.props.history.push(
        `/jobs?search=${this.state.search}`
      )
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ textTransform: "uppercase", fontSize: 20 }}>
          List of Jobs
        </h3>
        <JobsFormContainer />
        <JobsList
          jobs={this.props.jobs}
          OnPageChange={this.OnPageChange}
          sortBy={this.state.sortBy}
          currentPage={parseInt(this.state.page)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    jobs: state.jobs
   }
}

export default connect(mapStateToProps, { loadJobs })(JobsListContainer)