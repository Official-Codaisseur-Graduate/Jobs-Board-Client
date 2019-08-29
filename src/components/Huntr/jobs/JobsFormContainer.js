import React from 'react'
import { connect } from 'react-redux'
import JobsForm from './JobsForm'
import { searchJobs } from '../../../actions/jobs'

class JobsFormContainer extends React.Component {
  // 7: query to role
  // everywhere you find role
  state = {
    role: '',
    city: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.searchJobs(this.state)
    
    this.setState({
      // 7: query to role
      role: '',
      city: ''
    })
  }

  render() {
    return (<JobsForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}


export default connect(null, { searchJobs })(JobsFormContainer)