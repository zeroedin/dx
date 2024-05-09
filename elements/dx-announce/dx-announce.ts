import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import styles from './dx-announce.css';

/**
 * Announce
 * @slot - Place element content here
 */
@customElement('dx-announce')
export class DxAnnounce extends LitElement {
  static readonly styles = [styles];

  render() {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-announce': DxAnnounce;
  }
}
