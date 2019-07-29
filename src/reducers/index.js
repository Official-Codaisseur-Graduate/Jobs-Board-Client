import { combineReducers } from 'redux'
import jobs from './jobs'
import job from './job'
import companies from './companies'
import company from './company'
import allCompanies from './allCompanies'

export default combineReducers({
  jobs,
  job,
  companies,
  company,
  allCompanies
})