import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import CompaniesListContainer from './components/Huntr/CompaniesListContainer'
import JobsListContainer from './components/Huntr/jobs/JobsListContainer'
import JobsDetailsContainer from './components/Huntr/jobs/JobsDetailsContainer'
import CompanyDetailsContainer from './components/Huntr/CompanyDetailsContainer';
import NavBar from './components/TopBar/NavBar'
import GraduatesStatsListContainer from './components/Huntr/GraduatesStatsListContainer';
import HomePage from './components/Huntr/HomePage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jobs" component={JobsListContainer} />
          <Route exact path="/companies/:page/:sortBy/:search?" component={CompaniesListContainer} />
          <Route path="/jobs/:name" component={JobsDetailsContainer} />
          <Route path="/company/:id" component={CompanyDetailsContainer} />
          <Route path="/graduates" component={GraduatesStatsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;