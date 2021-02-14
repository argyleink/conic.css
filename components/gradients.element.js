import { gradients } from './gradients.module.css'
import CONICS from '../conics.js'

export default class ConicGradients extends HTMLElement {
  
  constructor() {
    super()
    this.classList.add(gradients)
    this.innerHTML = `${CONICS.map((conic, i) => 
      `<conic-gradient conic-id="${i}"></conic-gradient>`)
    .join('').replace(/\s+/g, ' ')}`
  }
}

customElements.define('conic-gradients', ConicGradients)