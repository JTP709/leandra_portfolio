import axios from 'axios';
// import { push } from 'connected-react-router';
import {
  UPDATE_PORTFOLIO
} from '../constants';

const BACKEND_URL = 'http://localhost:5000';

const fetchPortfolio = () => dispatch => {
  dispatch(loadingPortfolioStarted());
  axios.get(`${BACKEND_URL}/api/portfolio/get`)
    .then(response => dispatch(updatePortfolioArray(response.data)))
    .catch(error => dispatch(portfolioError(error)));
};

const updatePortfolioArray = portfolios => {
  return {
    type: UPDATE_PORTFOLIO.ARRAY,
    portfolios
  }
};

const loadingPortfolioStarted = () => {
  return {
    type: UPDATE_PORTFOLIO.LOADING_TRUE
  }
};

const portfolioError = error => {
  return {
    type: UPDATE_PORTFOLIO.ERROR,
    error
  }
};

export {
  BACKEND_URL,
  fetchPortfolio,
  updatePortfolioArray,
  loadingPortfolioStarted,
  portfolioError,
}
