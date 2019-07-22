import React from 'react'
import { initializeJobs } from '../../actions/jobs'
import { connect } from 'react-redux'
import IndeedList from './IndeedList'
import IndeedFormContainer from './IndeedFormContainer'

class IndeedListContainer extends React.PureComponent {
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
        <IndeedFormContainer />
        <IndeedList jobs={this.props.jobs} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { jobs: state.jobs }
}

export default connect(mapStateToProps, { initializeJobs })(IndeedListContainer)