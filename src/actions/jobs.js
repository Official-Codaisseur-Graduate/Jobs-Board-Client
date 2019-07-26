import request from 'superagent'
import { baseUrl } from './constants'

export const JOBS_FETCHED = "JOBS_FETCHED";

const jobsFetched = jobs => ({
  type: JOBS_FETCHED,
  jobs
})

export const initializeJobs = () => (dispatch, getState) => {
  if (getState().jobs) return
  dispatch( searchJobs({query: 'Junior Developer', city: 'Amsterdam'}) )
}

export const searchJobs = (query) => (dispatch) => {
  dispatch(jobsFetched(null))

  request
    .get(`${baseUrl}/jobs`)
    .query(query)
    .then(response => {
      dispatch(jobsFetched(response.body));
    })
    .catch(error => {
      console.error(error);
    });
}