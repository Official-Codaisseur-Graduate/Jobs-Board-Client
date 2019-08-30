import request from 'superagent'
import { baseUrl } from './constants'

export const MEMBERS_FETCHED = "MEMBERS_FETCHED"

const companiesFetched = allMembers => ({
  type: MEMBERS_FETCHED,
  allMembers
})

export const loadMembers = (query) => (dispatch) => {
  request(`${baseUrl}/member/`)
    .then(response => {
      dispatch(companiesFetched({
        allMembers: response.body
      }));
    })
    .catch(error => {
      console.error(error);
    });
}