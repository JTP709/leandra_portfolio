import { scrollReducer } from './scroll';

describe('Scroll Reducer', () => {
  it('scrollToAbout sets scrollToRef: About in state', () => {
    const mockAction = { type: 'SCROLL_TO_ABOUT' };
    const state = scrollReducer(undefined, mockAction);
    expect(state.scrollToRef).toEqual('ABOUT');
  });

  it('scrollToPortfolio sets scrollToRef: Portfolio in state', () => {
    const mockAction = { type: 'SCROLL_TO_PORTFOLIO' };
    const state = scrollReducer(undefined, mockAction);
    expect(state.scrollToRef).toEqual('PORTFOLIO');
  });

  it('resetScrollTo sets scrollToRef: to null in state', () => {
    const mockAction = { type: 'RESET_SCROLL_TO' };
    const state = scrollReducer({ scrollToRef: 'ABOUT' }, mockAction);
    expect(state.scrollToRef).toBeNull();
  });
})