import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';

/**
 * TODO: Add JSDoc comment.
 */
const app = mount(App, {
  target: document.getElementById('app')!,
});

/**
 * TODO: Add JSDoc comment.
 */
export default app;
