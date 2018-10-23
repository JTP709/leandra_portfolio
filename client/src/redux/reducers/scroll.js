export const scroll = (state = { scrollToRef: null }, action) => {
  switch(action.type) {
    case 'SCROLL_TO_ABOUT':
      return { scrollToRef: 'ABOUT' }
    case 'SCROLL_TO_PORTFOLIO':
      return { scrollToRef: 'PORTFOLIO' }
    case 'RESET_SCROLL_TO':
      return { scrollToRef: null }
    default:
      return state
  }
}
