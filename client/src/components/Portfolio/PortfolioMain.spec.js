import React from 'react';
import { PortfolioMain } from './PortfolioMain';
import { render, Simulate } from 'react-testing-library';

const portfolio = {
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
};

const openPortfolioModal = jest.fn();

const props = { portfolio, openPortfolioModal };

describe('Porfolio Main Component', () => {
  it('Clicking on the image fires the showPortfolio action', () => {
    const {getByTestId, container} = render(<PortfolioMain { ...props } />)
    const portfolio = getByTestId('portfolio-main-image');
    Simulate.click(portfolio);
    expect(openPortfolioModal).toHaveBeenCalled();
  });
});