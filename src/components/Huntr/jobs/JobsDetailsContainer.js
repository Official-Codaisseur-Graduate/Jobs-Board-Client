import React from 'react'
import { connect } from 'react-redux'
import JobsDetails from './JobsDetails';
import { loadJob } from '../../../actions/jobs'

class JobsDetailsContainer extends React.Component {

  componentDidMount() {
    this.props.loadJob(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <JobsDetails
        job={this.props.job}
        goBackToPreviousPage={this.goBackToPreviousPage}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    job: state.job
  }
}

export default connect(mapStateToProps, { loadJob })(JobsDetailsContainer) 
