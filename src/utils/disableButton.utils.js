export function disableAll() {
  document.querySelector('a').setAttribute('aria-disabled', true)
  const aAttribute = document.querySelector('a').getAttribute('class')
  document.querySelector('a').setAttribute('class', aAttribute + ' disabled')
  document.querySelector('button').setAttribute('disabled', true)
}

export function activateAll() {
  document.querySelector('a').removeAttribute('aria-disabled')
  const aAttribute = document.querySelector('a').getAttribute('class')
  document.querySelector('a').setAttribute('class', aAttribute.replace('disabled', '').trim())
  document.querySelector('button').removeAttribute('disabled')
}
