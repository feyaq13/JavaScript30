const panels = document.querySelectorAll('.panel')
// тут будет храниться активная панель, или null - если никакая
var current = null
// console.log(current)

function selectCurrent() {
  // смотрим, есть ли активная панель
  if (current) {
    // если да, то убираем с нее класс
    current.classList.remove('open')
    console.log(current)
  }

  // к выбранной панели добавляем класс
  this.classList.add('open')

  // и кладем выбранную панель в переменную
  current = this
}

function toggleActive(e) {
  // console.log(e.propertyName)
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

// базовое решение
panels.forEach(panel => panel.addEventListener('click', selectCurrent))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))