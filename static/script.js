document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main')
  const handleMainHeight = () => {
    main.style.height = `${window.innerHeight}px`
  }
  window.addEventListener('load', handleMainHeight)
  window.addEventListener('resize', handleMainHeight)
})
