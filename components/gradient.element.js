import { conicSwatch, miniSwatch } from './gradient.module.css'
import CONICS from '../conics.js'

export default class ConicGradient extends HTMLElement {
  
  constructor() {
    super()
    this.innerHTML = this.render()
  }

  connectedCallback() {
    this.addEventListener('click', e => {
      console.info(e.target.style.background)
    })
  }

  disconnectedCallback() {}

  render() {
    const conicAttribute = parseInt(this.getAttribute('conic-id'))
    const { gradient, shadow, colors } = CONICS[conicAttribute]

    return `
      <figure>
        <picture class="${conicSwatch}" style="background: ${gradient}; --shadow: ${shadow};"></picture>
        <figcaption>
          ${colors.map(color => `
            <span class="${miniSwatch}">
              <i style="--color:${color};"></i> ${color}
            </span>
          `).join('')}
        </figcaption>
      </figure>
    `.replace(/\s+/g, ' ')
  }
}

customElements.define('conic-gradient', ConicGradient)