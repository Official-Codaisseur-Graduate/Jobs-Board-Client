import React from 'react'
// import { findMatchingCompany } from '../../actions/jobs'
import { connect } from 'react-redux'
import JobsDetails from './JobsDetails';
import Stats from '../../Stats';

class JobsDetailsContainer extends React.Component {
  state = { 
    selectedJob: null 
  }

  componentDidMount() {
    const regExp = new RegExp('/.*', 'g')
    const selectedJob = this.props.jobs
      .find(job => {
        return job.company.replace(regExp, '') === this.props.match.params.name
      })

    // this.props.findMatchingCompany(this.props.match.params.name)

    this.setState({
      selectedJob: selectedJob
    })
  }

  render() {
    return (
      <div>
        <JobsDetails selectedJob={this.state.selectedJob} />
        <Stats company={this.props.jobsCompany}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    jobs: state.jobs,
    jobsCompany: state.jobsCompany
  }
}

export default connect(mapStateToProps)(JobsDetailsContainer) 
