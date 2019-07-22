import { combineReducers } from 'redux'
import jobs from './jobs'
import indeedCompany from './indeedCompany'
import companies from './companies'
import company from './company'

export default combineReducers({
  jobs,
  indeedCompany,
  companies,
  company
})