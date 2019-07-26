import React from 'react'
import { initializeJobs } from '../../../actions/jobs'
import { connect } from 'react-redux'
import JobsList from './JobsList'
import JobsFormContainer from './JobsFormContainer'

class JobsListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.initializeJobs()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h3 style={{
          textTransform: "uppercase",
          fontSize: 20
          }}>
          List of Jobs
        </h3>
        <JobsFormContainer />
        <JobsList jobs={this.props.jobs} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { jobs: state.jobs }
}

export default connect(mapStateToProps, { initializeJobs })(JobsListContainer)