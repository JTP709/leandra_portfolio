const scrollToAbout = () => ({
  type: 'SCROLL_TO_ABOUT'
})

const scrollToPortfolio = () => ({
  type: 'SCROLL_TO_PORTFOLIO'
})

const resetScrollTo = () => ({
  type: 'RESET_SCROLL_TO'
})

export {
  scrollToAbout,
  scrollToPortfolio,
  resetScrollTo
}