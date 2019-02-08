'use strict'

class DeclarativeJSON {
  constructor(template, appContext, renderFn) {
    // TODO: Check if template is JSON or object.
    this.jsonTemplate = parseTemplate(template, appContext)
  }

  render(renderFn) {
    if (typeof renderFn === 'function')
      return renderFn(this.jsonTemplate)

    return render(this.jsonTemplate)
  }
}

function parseTemplate(element, appContext, name) {
  let toRender = {}

  let condition = shouldRender(element, name, appContext)
  if (condition) {
    toRender = renderElement(element, name, condition, appContext)
    return toRender
  }

  if (typeof element === 'object') {
    for (let el of Object.keys(element)) {
      if (el === 'condition' || el === 'content' || el === 'context' || el === 'tags')
        continue

      if (typeof element[el] === 'object') {
        toRender[el] = parseTemplate(element[el], appContext, el)

        let tags = element[el].tags

        if (tags)
          toRender.tags = tags

        continue
      }
    }
    return toRender
  }

}

function shouldRender(el, name, appContext) {
  if (typeof el.condition === 'function') {
    let condition = null

    el.context = appContext && appContext[name] || {}
    condition = el.condition(el.context, appContext)

    return condition
  }
}

function renderElement(el, name, condition, appContext) {
  if (typeof el.content === 'object') {
    if (typeof el.content[condition] === 'function')
      return el.content[condition](el.context, appContext)
  }
}

function render(element) {
  let toRender = ''

  if (typeof element === 'object') {
    for (let el of Object.keys(element)) {
      if (el === 'tags')
        continue

      let openingTag = '<' + el + '>'
      let closingTag = '</' + el + '>'

      if (element.tags) {
        openingTag = element.tags[0]
        closingTag = element.tags[1]
      }

      toRender += openingTag
      if (typeof element[el] === 'object')
        toRender += render(element[el])
      else
        toRender += element[el]
      toRender += closingTag
    }
  }

  return toRender
}

// If environment is not browser, export it (for node compatibility)
if (typeof window === 'undefined')
  module.exports = DeclarativeJSON
