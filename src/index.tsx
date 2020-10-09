import React from 'react'
import ReactDOM from 'react-dom'
import lowloader from 'lowloader'
import singleSpaReact from 'single-spa-react'

import App from './App'

const elStandalone = document.getElementById('app-standalone')
if (elStandalone) {
  ReactDOM.render(<App />, elStandalone)
}

const domElementGetter = () => {
  let el = document.getElementById('mfBattleSimulator')
  if (!el) {
    el = document.createElement('div')
    el.id = 'mfBattleSimulator'
    document.body.appendChild(el)
  }
  return el
}

const app = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: App,
  App
})

export function bootstrap() {
  return app.bootstrap()
}

export function mount() {
  return app.mount()
}

export function unmount() {
  return app.unmount()
}

function renderApp(el: HTMLElement) {
  ReactDOM.render(<App />, el)
}

lowloader.export({
  singleSpaApp: app,
  renderApp
})
