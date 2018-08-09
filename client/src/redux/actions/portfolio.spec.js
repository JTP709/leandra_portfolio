import { fetchPortfolio, BACKEND_URL } from './portfolio';
import { UPDATE_PORTFOLIO } from '../constants';
import axios from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

// const mockDispatch = input => {
//   console.log('DISPATCH: ', input);
//   jest.fn(input)
// };

const mockDispatch = jest.fn();

const mockPortfolio = [
  {
    carousel: [
      'http://placekitten.com/g/1024/512',
      'https://placedog.net/1024/512',
      'http://placekitten.com/g/1024/512'
    ],
    front_end: [
      'JabbaScript',
      'KTML 5',
      'KSS 3'
    ],
    back_end: [
      'Jabba',
      'Esspress',
      'MandoBH'
    ],
    _id: '5b5e2a83116f07294ba71ca0',
    rank: '1',
    title: 'Qroger',
    thumbnail: 'http://placekitten.com/g/512/256',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    hidden: false,
    github: 'https://www.github.com',
    demo: 'https://www.google.com',
    __v: 0
  },
  {
    carousel: [
      'http://placekitten.com/g/1024/512',
      'https://placedog.net/1024/512',
      'http://placekitten.com/g/1024/512'
    ],
    front_end: [
      'JabbaScript',
      'KTML 5',
      'KSS 3'
    ],
    back_end: [
      'Jabba',
      'Esspress',
      'MandoBH'
    ],
    _id: '5b5e2a83116f07294ba71ca1',
    rank: '2',
    title: 'Kwitter',
    thumbnail: 'https://placedog.net/512/256',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    hidden: false,
    github: 'https://www.github.com',
    demo: 'https://www.google.com',
    __v: 0
  }
];

beforeEach(() => {
  axios.get.mockImplementation(() => Promise.resolve({ data: mockPortfolio }));
  // axios.post.mockImplementation(() => Promise.resolve({ status: 200 }));
});

describe('Portfolio Reducer', () => {
  it('dispatches UPDATE_PORTFOLIO.LOADING_TRUE action', () => {
    fetchPortfolio()(mockDispatch);

    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: UPDATE_PORTFOLIO.LOADING_TRUE });
  });

  it('fetchPortfolio makes a GET request to the correct endpoint', () => {
    fetchPortfolio()(mockDispatch);

    expect(axios.get.mock.calls[0][0]).toEqual(`${BACKEND_URL}/api/portfolio/get`);
  })

  it('fetchPortfolio dispatches updatePortfolioArray() with the correct data on successful GET request', async () => {
    expect.assertions(1);

    await fetchPortfolio()(mockDispatch);
    expect(mockDispatch.mock.calls[1][0]).toEqual({ portfolios: mockPortfolio, type: UPDATE_PORTFOLIO.ARRAY})
  });
  
  // TODO = fix this test
  it.skip('fetchPOrtfolio dispatches portfolioError() on unsuccessful GET request', async () => {
    expect.assertions(1);
    const error = new Error('Network Error');
    axios.get.mockImplementation(() => Promise.reject(error));

    await fetchPortfolio()(mockDispatch);

    // return expect(fetchPortfolio()(mockDispatch)).then(() => {

    // });
    
    console.log(mockDispatch.mock.calls);
    expect(mockDispatch.mock.calls[1][0]).toEqual({ error: error, type: UPDATE_PORTFOLIO.ERROR });

  })
});