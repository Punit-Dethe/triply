import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { StagewiseToolbar } from '@stagewise/toolbar-react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Stagewise Toolbar Integration
if (process.env.NODE_ENV === 'development') {
  const stagewiseConfig = {
    plugins: []
  };

  const toolbarContainer = document.getElementById('stagewise-toolbar-root');
  if (toolbarContainer) {
    const toolbarRoot = createRoot(toolbarContainer);
    toolbarRoot.render(
      <React.StrictMode>
        <StagewiseToolbar config={stagewiseConfig} />
      </React.StrictMode>
    );
  } else {
    console.error('Stagewise toolbar root element not found.');
  }
}
