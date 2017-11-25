import {
  LOAD_USER,
  LOAD_CONTRACTS,
  LOAD_ACCOUNTS,
  SAVE_CONTRACT,
  ADD_CONTRACT
} from '../actions/types'

export const initialState = {
  user: null,
  contracts: null,
  accounts: null
}

const contracts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: {
      return { ...state, user: action.payload }
    }
    case LOAD_CONTRACTS: {
      return { ...state, contracts: action.payload }
    }
    case LOAD_ACCOUNTS: {
      return { ...state, accounts: action.payload }
    }
    case SAVE_CONTRACT: {
      const contracts = state.contracts
      contracts.forEach((o, i, a) => {
        if (o.id === action.payload.id) {
          a[i] = action.payload
        }
      })
      return { ...state, contracts }
    }
    case ADD_CONTRACT: {
      return {
        ...state,
        contracts: [
          ...state.contracts,
          action.payload
        ]
      }
    }
    default: {
      return state
    }
  }
}

export default contracts
