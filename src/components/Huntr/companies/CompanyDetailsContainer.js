import React from 'react'
import { connect } from 'react-redux'
import CompanyDetails from './CompanyDetails'
import { loadCompany } from '../../../actions/companies'

class CompanyDetailsContainer extends React.PureComponent {
  onClick = (e) => {
    const aNewTab = e.metaKey || e.ctrlKey;
    const anExternalLink = this.props.href.startsWith('http');

    if (!aNewTab && !anExternalLink) {
      e.preventDefault();
      this.props.history.push(this.props.href);
    }
  }

  componentDidMount() {
    this.props.loadCompany(this.props.match.params.id)

  }

  goBackToPreviousPage = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <CompanyDetails
          company={this.props.company}
          goBackToPreviousPage={this.goBackToPreviousPage}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  company: state.company,
})

export default connect(mapStateToProps, { loadCompany })(CompanyDetailsContainer)

