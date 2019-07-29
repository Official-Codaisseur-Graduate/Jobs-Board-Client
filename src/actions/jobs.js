import request from 'superagent'
import { baseUrl } from './constants'

export const JOBS_FETCHED = "JOBS_FETCHED";
export const JOB_FETCHED = "JOB_FETCHED";

const jobsFetched = jobs => ({
  type: JOBS_FETCHED,
  jobs
})

const jobFetched = job => ({
  type: JOB_FETCHED,
  job
})

export const loadJobs = (query) => (dispatch) => {
  request(`${baseUrl}/jobs`)
    .query(query)
    .then(response => {
      dispatch(jobsFetched({
        jobs: response.body,
        query: query
      }))
    })
    .catch(error => {
      console.error(error);
    })
}

export const loadJob = (id) => (dispatch, getState) => {
  const state = getState().job
  if (state && state.id === id) return

  request(`${baseUrl}/jobs/${id}`)
    .then(response => {
      dispatch(jobFetched(response.body))
    })
    .catch(console.error)
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