document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main') || null
  if (!main) return
  const handleMainHeight = () => {
    main.style.height = `${window.innerHeight}px`
  }
  window.addEventListener('load', handleMainHeight)
  window.addEventListener('resize', handleMainHeight)
})
