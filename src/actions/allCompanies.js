import request from 'superagent'
import { baseUrl } from './constants'

export const ALL_COMPANIES_FETCHED = "ALL_COMPANIES_FETCHED"

const allCompaniesFetched = companies => ({
  type: ALL_COMPANIES_FETCHED,
  companies
})

export const loadAllCompanies = () => (dispatch) => {
  request(`${baseUrl}/allcompanies`)
    .then(response => {
      dispatch(allCompaniesFetched(response.body.companies))
    })
    .catch(console.error)
}
