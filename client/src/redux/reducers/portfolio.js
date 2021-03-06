import {
  UPDATE_PORTFOLIO
} from '../constants';

const defaultState = {
  loading: false,
  portfolios: [],
  error: null
}

export const portfolio = (state = defaultState, action) => {
  switch(action.type) {
    case UPDATE_PORTFOLIO.ARRAY:
      const portfolios = action.portfolios;
      return {
        ...state,
        portfolios,
        loading: false,
      }
    case UPDATE_PORTFOLIO.LOADING_TRUE:
      return {
        ...state,
        loading: true
      }
    case UPDATE_PORTFOLIO.ERROR:
      const error = action.error;
      return {
        ...state,
        error,
        loading: false,
      }
    default:
      return state
  }
}