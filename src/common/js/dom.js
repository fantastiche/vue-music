function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

function getData(el, name, val) {
  const prefix = 'data-'
  return val ? el.setAttribute(prefix + name, val) : el.getAttribute(prefix + name)
}

export {
  addClass,
  getData
}
