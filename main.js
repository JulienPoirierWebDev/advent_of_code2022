import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="1.html">Day 1</a>
    <a href="2.html">Day 2</a>
    <a href="3.html">Day 3</a>
    <a href="4.html">Day 4</a>

  </div>
`

setupCounter(document.querySelector('#counter'))
