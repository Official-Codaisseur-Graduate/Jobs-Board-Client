import request from 'superagent'
import { baseUrl } from './constants'

export const JOBS_FETCHED = "JOBS_FETCHED";

const jobsFetched = jobs => ({
  type: JOBS_FETCHED,
  jobs
})

// export const initializeJobs = () => (dispatch, getState) => {
//   if (getState().jobs) return
//   dispatch( searchJobs({query: 'Junior Developer', city: 'Amsterdam'}) )
// }

export const initializeJobs = () => (dispatch, getState) => {
  if (getState().jobs) return
  // console.log('getstate', getState().jobs === true)
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

// export const searchJobs = (query) => (dispatch) => {
//   dispatch(jobsFetched(null))

//   request
//     .get(`${baseUrl}/jobs`)
//     .query(query)
//     .then(response => {
//       dispatch(jobsFetched(response.body));
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }




// export const JOBS_COMPANY_FETCHED = "JOBS_COMPANY_FETCHED";

// const jobsCompanyFetched = company => ({
//   type: JOBS_COMPANY_FETCHED,
//   company
// })

// export const findMatchingCompany = (companyName) => (dispatch) => {
//   request
//     .get(`${baseUrl}/companies/jobs/${companyName}`)
//     .then(response => {
//       dispatch(jobsCompanyFetched(response.body))
//     })
//     .catch(error => {
//       console.error(error)
//     })
// }