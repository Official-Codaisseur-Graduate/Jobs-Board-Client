import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import CompaniesListContainer from './components/Huntr/CompaniesListContainer'
import IndeedListContainer from './components/Indeed/IndeedListContainer'
import IndeedDetailsContainer from './components/Indeed/IndeedDetailsContainer'
import CompanyDetailsContainer from './components/Huntr/CompanyDetailsContainer';
import NavBar from './components/TopBar/NavBar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <Route exact path="/" component={IndeedListContainer} />
          <Route exact path="/companies" component={CompaniesListContainer} 
          />
          <Route path="/jobs/:name" component={IndeedDetailsContainer} />
          <Route path="/company/:id" component={CompanyDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;