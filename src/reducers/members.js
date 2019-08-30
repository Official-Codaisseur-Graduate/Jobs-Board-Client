import { MEMBERS_FETCHED } from "../actions/members"

export default (state = null, action = {}) => {
  switch (action.type) {
    case MEMBERS_FETCHED:
      return action.allMembers
    default:
      return state
  }
}