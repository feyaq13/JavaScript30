var panels = document.querySelectorAll('.panel')
var currentPanel = null

function toggleOpen() {

  if (currentPanel && currentPanel.classList.contains('open')) {
    currentPanel.classList.toggle('open', false)
    // this.classList.toggle('open', true)
    currentPanel = this
  } else {
    this.classList.toggle('open', true)
    currentPanel = this
  }


}

// function toggleActive(e) {
//   console.log(e.propertyName)
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active')
//   }
// }

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))