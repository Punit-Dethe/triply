import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

if (import.meta.env.DEV) {
  (async () => {
    const { StagewiseToolbar } = await import('@stagewise/toolbar-react');
    const toolbarContainer = document.getElementById('stagewise-toolbar-root');
    const toolbarRoot = createRoot(toolbarContainer);

    toolbarRoot.render(
      <StagewiseToolbar config={{ plugins: [] }} />
    );
  })();
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
