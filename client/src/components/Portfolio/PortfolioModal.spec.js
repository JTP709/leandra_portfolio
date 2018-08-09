import React from 'react';
import { PortfolioModal } from './PortfolioModal';
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

const mockCloseAction = jest.fn();

const props = { portfolio, closePortfolioModal: mockCloseAction }

describe('Portfolio Modal Component', () => {
  it('renders the portfolio title', () => {
    const {getByTestId, container} = render(<PortfolioModal portfolio={portfolio} />)
    const header = getByTestId('portfolio-modal-title');
    expect(header.innerHTML).toBe(portfolio.title);
  });

  it('renders the carousel component with correct images', () => {

  });

  it('renders the about section with correct tech stack information', () => {

  });

  it('renders the github and demo links and navigate to the correct url', () => {

  });

  it.only('clicking on the close button fires the closing function', () => {
    const {getByTestId, container} = render(<PortfolioModal { ...props } />)
    const closeButton = getByTestId('portfolio-modal-close-button');
    Simulate.click(closeButton);
    expect(mockCloseAction).toHaveBeenCalled();
  });

  it('', () => {

  });
});