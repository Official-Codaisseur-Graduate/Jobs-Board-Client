import { COMPANY_FETCHED } from '../actions/companies'


export default function (state = [], action) {
  switch(action.type) {
    case COMPANY_FETCHED:
      return action.company
      default:
        return state
    }
  }

