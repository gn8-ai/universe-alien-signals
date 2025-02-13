/**
 * @jsxImportSource solid-js
 */

import reactSvg from '../_assets/react.svg';
import solidSvg from '../_assets/solid.svg';
import vueSvg from '../_assets/vue.svg';
import styles from './Navigation.module.css';

/**
 * Navigation component.
 *
 * @jsx
 */
export default function Navigation() {
  return (
    <nav class={styles.navigation}>
      <a href="/react" class="logo-link">
        <img src={reactSvg.src} alt="React" class="logo react" />
      </a>
      <a href="/solid" class="logo-link">
        <img src={solidSvg.src} alt="Solid" class="logo solid" />
      </a>
      <a href="/vue" class="logo-link">
        <img src={vueSvg.src} alt="Vue" class="logo vue" />
      </a>
    </nav>
  );
}
