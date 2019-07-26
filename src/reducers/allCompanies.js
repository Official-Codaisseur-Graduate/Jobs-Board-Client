import { ALL_COMPANIES_FETCHED } from "../actions/allCompanies"

export default (state = null, action = {}) => {
  switch (action.type) {
    case ALL_COMPANIES_FETCHED:
      return action.companies
    default:
      return state
  }
}