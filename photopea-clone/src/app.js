import { initializeCanvas } from './components/canvas.js';
import { initializeSidebar } from './components/sidebar.js';
import { initializeToolbar } from './components/toolbar.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeToolbar();
  initializeSidebar();
  initializeCanvas();
});