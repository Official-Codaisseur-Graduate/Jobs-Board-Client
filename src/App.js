import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CompaniesListContainer from './components/Huntr/companies/CompaniesListContainer'
import JobsListContainer from './components/Huntr/jobs/JobsListContainer'
import JobsDetailsContainer from './components/Huntr/jobs/JobsDetailsContainer'
import CompanyDetailsContainer from './components/Huntr/companies/CompanyDetailsContainer'
import NavBar from './components/TopBar/NavBar'
import GraduatesStatsListContainer from './components/Huntr/graduates/GraduatesStatsListContainer'
import HomePage from './components/Huntr/HomePage'

class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jobs" component={JobsListContainer} />
          <Route exact path="/companies" component={CompaniesListContainer} />
          <Route exact path="/company/:id" component={CompanyDetailsContainer} />
          <Route exact path="/jobs/:id" component={JobsDetailsContainer} />
        </div>
    )
  }
}

export default App;
