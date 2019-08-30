import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllCompanies } from '../../../actions/allCompanies'
import GraduatesStatsPerMember from './GraduatesStatsPerMember'
import {loadMembers} from '../../../actions/members'

export class GraduatesStatsPerMemberContainer extends Component {
  componentDidMount() {
    this.props.loadAllCompanies()
    this.props.loadMembers()
  }

  render() {
    return (
      <div>
        <GraduatesStatsPerMember allMembers={this.props.allMembers} allCompanies={this.props.allCompanies}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allCompanies: state.allCompanies,
  companies: state.companies,
  allMembers: state.allMembers
})

export default connect(mapStateToProps, { loadAllCompanies, loadMembers })(GraduatesStatsPerMemberContainer)