import React from 'react';
import { Outlet } from 'react-router-dom';
import ResizableNavbar from './ResizableNavbar';
import Footer from './Footer';
import DevToolbar from './DevToolbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ResizableNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <DevToolbar />
    </div>
  );
};

export default Layout;
