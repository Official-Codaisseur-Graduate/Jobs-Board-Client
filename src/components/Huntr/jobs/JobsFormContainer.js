import React from 'react'
import { connect } from 'react-redux'
import JobsForm from './JobsForm'
import { searchJobs } from '../../../actions/jobs'

class JobsFormContainer extends React.Component {
  // query to role
  // everywhere you find role
  state = {
    role: '',
    city: ''
  }

  onChange = (event) => {
    console.log('EVENT:', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    this.props.searchJobs(this.state)
    event.preventDefault()
    this.setState({
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