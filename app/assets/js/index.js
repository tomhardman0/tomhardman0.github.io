import config from './config'
import {EventEmitter} from 'events'

import home from './ctrl/home'

class App extends EventEmitter {
  constructor() {
    super() // init
  }
}

let app = window.app = new App()

;[home].forEach(controller => controller(app))

console.info(`${config.name} App Started`)
