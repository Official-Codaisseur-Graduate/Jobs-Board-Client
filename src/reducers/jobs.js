import { JOBS_FETCHED } from "../actions/jobs";

const initialState = {
  result: [],
  total: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case JOBS_FETCHED:
      return action.jobs
    default:
      return state
  }
}