import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import Noty from 'noty'
import { conicSwatch, miniSwatch } from './gradient.module.css'
import CONICS from '../conics.js'

const {matches:motionOK} = window.matchMedia('prefers-reduced-motion: no-preference')

export default class ConicGradient extends HTMLElement {
  
  constructor() {
    super()

    const conicAttribute = parseInt(this.getAttribute('conic-id'))
    
    this.conic = CONICS[conicAttribute]
    this.innerHTML = this.render()
  }

  connectedCallback() {
    this.addEventListener('click', e => {
      this.copyToClipboard(this.conic.background)

      new Noty({
        text: "conic gradient CSS copied!",
        timeout: 2000,
        killer: true,
      }).show()

      confetti({
        colors: this.conic.hex,
        startVelocity: 10,
        spread: this.clientWidth,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        disableForReducedMotion: motionOK,
        useWorker: true,
      })
    })
  }

  disconnectedCallback() {}

  async copyToClipboard(text) {
    try {
      return navigator.clipboard.writeText(text)
    } 
    catch (err) {
      return Promise.reject(err)
    }
  }

  render() {
    const { gradient, shadow, colors } = this.conic

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