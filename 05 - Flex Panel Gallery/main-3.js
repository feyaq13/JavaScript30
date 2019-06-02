var panels = document.querySelectorAll('.panel')
var currentPanel = null

function toggleOpen() {
  if (!currentPanel) {
    this.classList.add('open')
    currentPanel = this
  } else {
    currentPanel.classList.remove('open')

    if (currentPanel === this) {
      currentPanel = null
    } else {
      currentPanel = this
      currentPanel.classList.add('open')
    }
  }
}

function toggleActive(e) {
  console.log(e.propertyName)
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))