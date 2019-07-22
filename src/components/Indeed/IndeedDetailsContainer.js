import React from 'react'
import { findMatchingCompany } from '../../actions/jobs'
import { connect } from 'react-redux'
import IndeedDetails from './IndeedDetails';
import Stats from '../Stats';

class IndeedDetailsContainer extends React.Component {
  state = { 
    selectedJob: null 
  }

  componentDidMount() {
    const regExp = new RegExp('/.*', 'g')
    const selectedJob = this.props.jobs
      .find(job => {
        return job.company.replace(regExp, '') === this.props.match.params.name
      })

    this.props.findMatchingCompany(this.props.match.params.name)

    this.setState({
      selectedJob: selectedJob
    })
  }

  render() {
    return (
      <div>
        <IndeedDetails selectedJob={this.state.selectedJob} />
        <Stats company={this.props.indeedCompany}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    jobs: state.jobs,
    indeedCompany: state.indeedCompany
  }
}

export default connect(mapStateToProps, { findMatchingCompany })(IndeedDetailsContainer) 
