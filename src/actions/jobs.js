import request from 'superagent'
import { baseUrl } from './constants'

export const JOBS_FETCHED = "JOBS_FETCHED";

const jobsFetched = jobs => ({
  type: JOBS_FETCHED,
  jobs
})

export const loadJobs = (query) => (dispatch) => {
  console.log('QUERY:', query)
  request(`${baseUrl}/jobs`)
    .query(query)
    .then(response => {
      dispatch(jobsFetched({
        result: response.body.rows,
        total: response.body.pages,
        query: query
      }))
    })
    .catch(error => {
      console.error(error);
    })
}



// export const loadJobs = (query) => (dispatch, getState) => {
//   console.log('QUERY:', query)
//   if (getState().jobs) return
//   dispatch(searchJobs(
//     query
//     // { position: 'Junior Developer', city: 'Amsterdam' }
//   ))
// }

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