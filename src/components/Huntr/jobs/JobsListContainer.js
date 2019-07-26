import React from 'react'
import { loadJobs } from '../../../actions/jobs'
import { connect } from 'react-redux'
import JobsList from './JobsList'
import JobsFormContainer from './JobsFormContainer'

class JobsListContainer extends React.PureComponent {
  state = {
    page: this.props.match.params.page,
    sortBy: this.props.match.params.sortBy,
    search: this.props.match.params.search === undefined ? '' : this.props.match.params.search
  }

  componentDidMount() {
    this.props.loadJobs(this.state)
    console.log('PARAMS:', this.props.match)
  }

  componentDidUpdate(prevProps) {
    const locationChanged = this.props.location !== prevProps.location
    if (locationChanged) {
      const { page, sortBy, search } = this.props.match.params
      const updatedState = {
        page,
        sortBy,
        search: search === undefined ? '' : search
      }
      this.setState(updatedState)
      this.props.loadJobs(updatedState)
    }
  }

  OnPageChange = (event) => {
    const { selected } = event;
    this.props.history.push(
      `/jobs/${selected}/${this.state.sortBy}/${this.state.search}`
    )
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
        `/jobs/0/${this.state.sortBy}/${this.state.search}`
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
          // jobTitle={this.state.search}
          sortBy={this.state.sortBy}
          currentPage={parseInt(this.state.page)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { jobs: state.jobs }
}

export default connect(mapStateToProps, { loadJobs })(JobsListContainer)