import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routing/Routes'; // Import the AppRoutes component
import SideBar from './components/SideBar';

export default function App() {
  return (
    <Router> {/* Wrap the entire app in BrowserRouter */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header /> {/* Header component */}
        <div style={{ display: 'flex', flex: 1 }}> {/* Main content area */}
          <SideBar /> {/* Sidebar on the left */}
          <div style={{ flex: 1, padding: '20px' }}> {/* Content area on the right */}
            <AppRoutes /> {/* Render the routes or data here */}
          </div>
        </div>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}
