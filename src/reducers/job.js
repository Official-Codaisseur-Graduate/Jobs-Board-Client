import { JOB_FETCHED } from '../actions/jobs'


export default function (state = [], action) {
  switch(action.type) {
    case JOB_FETCHED:
      return action.job
      default:
        return state
    }
  }

