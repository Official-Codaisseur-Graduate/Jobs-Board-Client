import { JOBS_FETCHED } from "../actions/jobs";

export default (state = null, action = {}) => {
  switch (action.type) {
    case JOBS_FETCHED:
      return action.jobs
    default:
      return state
  }
}