import React from 'react'
import { connect } from 'react-redux'
import IndeedForm from './IndeedForm'
import { searchJobs } from '../../actions/jobs'

class IndeedFormContainer extends React.Component {
  state = {
    query: '',
    city: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    this.props.searchJobs(this.state)
    event.preventDefault()
    this.setState({
      query: '',
      city: ''
    })
  }

  render() {
    return (<IndeedForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}


export default connect(null, { searchJobs })(IndeedFormContainer)