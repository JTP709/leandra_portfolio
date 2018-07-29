import axios from 'axios';
import { push } from 'connected-react-router';
import {
  UPDATE_PORTFOLIO
} from '../constants';

const BACKEND_URL = 'http://localhost:5000';

export const fetchPortfolio = () => {
  return dispatch => {
    dispatch(loadingPortfolioStarted());
    fetch(`${BACKEND_URL}/api/portfolio/get`)

      .then(response => {
        if (!response.ok) {
          alert('API call returned an error.');
          throw Error(response.statusText);
        }
        return response.json();
      })

      .then(data => {

        dispatch(updatePortfolioArray(data));
        dispatch(loadingPortfolioFinished());

      })
      .catch(error => {
        dispatch(loadingPortfolioStarted())
        dispatch(portfolioError(error));
      })
  };
}

const updatePortfolioArray = portfolios => {
  return {
    type: UPDATE_PORTFOLIO.ARRAY,
    portfolios
  }
}

const loadingPortfolioStarted = () => {
  return {
    type: UPDATE_PORTFOLIO.LOADING_TRUE
  }
}

const loadingPortfolioFinished = () => {
  return {
    type: UPDATE_PORTFOLIO.LOADING_FALSE
  }
}

const portfolioError = error => {
  return {
    type: UPDATE_PORTFOLIO.ERROR,
    error
  }
}
