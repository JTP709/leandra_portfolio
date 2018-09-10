import axios from 'axios';
// import { push } from 'connected-react-router';
import { UPDATE_PORTFOLIO } from '../constants';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

const fetchPortfolio = () => dispatch => {
  dispatch(loadingPortfolioStarted());
  axios.get(`${BACKEND_URL}/api/portfolio/get`)
    .then(response => dispatch(updatePortfolioArray(response.data)))
    .catch(error => dispatch(portfolioError(error)));
};

const updatePortfolioArray = portfolios => ({
  type: UPDATE_PORTFOLIO.ARRAY,
  portfolios
});

const portfolioError = error => ({
  type: UPDATE_PORTFOLIO.ERROR,
  error
});

const loadingPortfolioStarted = () => ({ type: UPDATE_PORTFOLIO.LOADING_TRUE });

export {
  BACKEND_URL,
  fetchPortfolio,
  updatePortfolioArray,
  loadingPortfolioStarted,
  portfolioError,
}
