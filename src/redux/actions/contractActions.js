import axios from 'axios'
import {
  LOAD_USER,
  LOAD_CONTRACTS,
  LOAD_ACCOUNTS,
  SAVE_CONTRACT
} from './types'

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

export const loadContracts = () => (
  async (dispatch, getState) => {
    let result
    try {
      /*result = await axios.get('/contracts', {
        params: {
          ID: 12345
        }
      })*/
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: LOAD_CONTRACTS,
      payload: [
        { id: 1, name: 'Split costs', code: 'function onTransaction(transaction) { doSomething() }' },
        { id: 2, name: 'My savings', code: 'function onTransaction(transaction) { doSomething() }' }
      ]
    })
  }
)

export const loadAccounts = () => (
  async (dispatch, getState) => {
    let result
    try {
      /*result = await axios.get('/contracts', {
        params: {
          ID: 12345
        }
      })*/
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: LOAD_ACCOUNTS,
      payload: [
        { id: 1, name: 'Split costs', code: 'function onTransaction(transaction) { doSomething() }' },
        { id: 2, name: 'My savings', code: 'function onTransaction(transaction) { doSomething() }' }
      ]
    })
  }
)

export const saveContract = (contract) => (
  async (dispatch, getState) => {
    let result
    try {
      /*result = await axios.get('/contracts', {
        params: {
          ID: 12345
        }
      })*/
    } catch (e) {
      console.log('Error:', e)
    }

    dispatch({
      type: SAVE_CONTRACT,
      payload: contract
    })
  }
)
