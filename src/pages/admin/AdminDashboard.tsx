import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/auth';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await auth.checkAuth();
        if (user) {
          setIsAuthenticated(true);
        } else {
          navigate('/admin/login');
        }
      } catch {
        navigate('/admin/login');
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-link ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            <i className="fas fa-home"></i>
            <span>Overview</span>
          </button>
          
          <button 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveSection('projects')}
          >
            <i className="fas fa-project-diagram"></i>
            <span>Projects</span>
          </button>
          
          <button 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            <i className="fas fa-user"></i>
            <span>About</span>
          </button>
          
          <button 
            className={`nav-link ${activeSection === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveSection('messages')}
          >
            <i className="fas fa-envelope"></i>
            <span>Messages</span>
          </button>
          
          <button 
            className={`nav-link ${activeSection === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveSection('settings')}
          >
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-title">
            <h1>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
          </div>
          <div className="header-actions">
            <div className="user-info">
              <span>Admin</span>
              <i className="fas fa-user-circle"></i>
            </div>
          </div>
        </header>

        <div className="admin-content">
          {/* Content will be added based on activeSection */}
          <div className="content-placeholder">
            <h2>Welcome to {activeSection} section</h2>
            <p>Content for {activeSection} will be displayed here</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 