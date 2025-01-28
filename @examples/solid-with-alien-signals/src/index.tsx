/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App.tsx';

/**
 * Root element.
 */
const root = document.getElementById('root');

/**
 * Render the app.
 */
render(() => <App />, root!);
