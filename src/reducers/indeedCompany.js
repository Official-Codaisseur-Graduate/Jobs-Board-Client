import { INDEED_COMPANY_FETCHED } from "../actions/jobs";

export default (state = null, action = {}) => {
  switch (action.type) {
    case INDEED_COMPANY_FETCHED:
      return action.company
    default:
      return state
  }
}