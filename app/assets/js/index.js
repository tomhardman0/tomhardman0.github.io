import config from './config'
import {EventEmitter} from 'events'
import BrowserSize from 'browser-size'

import home from './ctrl/home'

class App extends EventEmitter {
  constructor() {
    super() // init
  }
}

let app = window.app = new App()

// app utilities
app.browser = new BrowserSize()

;[home].forEach(controller => controller(app))

console.info(`${config.name} App Started`)
