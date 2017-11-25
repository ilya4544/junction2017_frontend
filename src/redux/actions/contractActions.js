import axios from 'axios'
import {
  LOAD_USER,
  LOAD_CONTRACTS,
  LOAD_ACCOUNTS,
  SAVE_CONTRACT,
  ADD_CONTRACT
} from './types'
import { API_PATH } from '../../common/app-const'

const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
}

export const loadUser = () => (
  async (dispatch, getState) => {
    let result
    try {
      /*result = await axios.get('/user', {
        params: {
          ID: 12345
        }
      })*/
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: LOAD_USER,
      payload: { name: 'Ilya Lyamkin' }
    })
  }
)

export const loadContracts = (accountId) => (
  async (dispatch, getState) => {
    let result
    try {
      result = await axios.get(`${API_PATH}accounts/${accountId}/contracts`)
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: LOAD_CONTRACTS,
      payload: result.data
    })
  }
)

export const createContract = (contract, accountId) => (
  async (dispatch, getState) => {
    let result
    try {
      result = await axios.post(`${API_PATH}accounts/${accountId}/contracts`, contract)
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: ADD_CONTRACT,
      payload: contract
    })
  }
)

export const loadAccounts = () => (
  async (dispatch, getState) => {
    let result
    try {
      result = await axios.get(`${API_PATH}accounts`, config)
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: LOAD_ACCOUNTS,
      payload: result.data
    })
  }
)

export const saveContract = (contract, accountId) => (
  async (dispatch, getState) => {
    let result
    try {
      result = await axios.put(`${API_PATH}accounts/${accountId}/contracts`, contract, config)
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: SAVE_CONTRACT,
      payload: contract
    })
  }
)

export const executeContract = (contractId) => (
  async (dispatch, getState) => {
    let result
    try {
      result = await axios.get(`${API_PATH}contracts/${contractId}/execute`, config)
    } catch (e) {
      console.log('Error:', e)
    }
  }
)
