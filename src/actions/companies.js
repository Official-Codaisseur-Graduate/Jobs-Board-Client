import request from 'superagent'
import { baseUrl } from './constants'

export const COMPANIES_FETCHED = "COMPANIES_FETCHED"
export const COMPANY_FETCHED = "COMPANY_FETCHED"

const companiesFetched = companies => ({
  type: COMPANIES_FETCHED,
  companies
})

const companyFetched = company => ({
  type: COMPANY_FETCHED,
  company
})

export const loadCompanies = (query) => (dispatch) => {
  
  request(`${baseUrl}/companies`)
    .query(query)
    .then(response => {
      dispatch(companiesFetched({
        companies: response.body,
        query: query
      }));
    })
    .catch(error => {
      console.error(error);
    });
}

export const loadCompany = (id) => (dispatch, getState) => {
  const state = getState().company
  if (state && state.id === id) return

  request(`${baseUrl}/companies/${id}`)
    .then(response => {
      dispatch(companyFetched(response.body))
    })
    .catch(console.error)
}