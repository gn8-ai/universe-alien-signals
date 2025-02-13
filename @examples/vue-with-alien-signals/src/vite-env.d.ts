/// <reference types="vite/client" />

declare module '*.vue' {
  import { type DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  // eslint-disable-next-line jsdoc/require-jsdoc
  export default component;
}
