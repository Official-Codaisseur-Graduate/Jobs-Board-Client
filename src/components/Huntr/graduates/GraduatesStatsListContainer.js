import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllCompanies } from '../../../actions/allCompanies'
import GraduatesStatsList from './GraduatesStatsList'
import GraduatesStatsPerMemberContainer from './GraduatesStatsPerMemberContainer';

export class GraduatesStatsListContainer extends Component {
  componentDidMount() {
    this.props.loadAllCompanies()
  }

  render() {
    return (
      <div>
        <GraduatesStatsList companies={this.props.allCompanies} />
        <GraduatesStatsPerMemberContainer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allCompanies: state.allCompanies,
  companies: state.companies
})

export default connect(mapStateToProps, { loadAllCompanies })(GraduatesStatsListContainer)