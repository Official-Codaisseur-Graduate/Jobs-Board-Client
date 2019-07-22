import { COMPANIES_FETCHED } from "../actions/companies"

export default (state = null, action = {}) => {
  switch (action.type) {
    case COMPANIES_FETCHED:
      return action.companies

    default:
      return state
  }
}