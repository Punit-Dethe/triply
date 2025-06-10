import { useEffect, useRef } from 'react';
import { StagewiseToolbar } from '@stagewise/toolbar-react';

const DevToolbar = () => {
  const toolbarRef = useRef(null);
  const stagewiseConfig = {
    plugins: []
  };

  // Only render in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div ref={toolbarRef} id="stagewise-toolbar-root">
      <StagewiseToolbar config={stagewiseConfig} />
    </div>
  );
};

export default DevToolbar;
