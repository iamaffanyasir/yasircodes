import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../utils/auth';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await authService.checkAuth();
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
      await authService.logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <i className="fas fa-project-diagram"></i>
            <h3>Projects</h3>
            <p>Manage your projects</p>
            <button 
              className="card-button"
              onClick={() => handleNavigation('/admin/manage-projects')}
            >
              View Projects
            </button>
          </div>

          <div className="dashboard-card">
            <i className="fas fa-file-alt"></i>
            <h3>Resume</h3>
            <p>Update your resume</p>
            <button 
              className="card-button"
              onClick={() => handleNavigation('/admin/manage-resume')}
            >
              Edit Resume
            </button>
          </div>

          <div className="dashboard-card">
            <i className="fas fa-user"></i>
            <h3>About</h3>
            <p>Edit your information</p>
            <button 
              className="card-button"
              onClick={() => handleNavigation('/admin/manage-about')}
            >
              Edit About
            </button>
          </div>

          <div className="dashboard-card">
            <i className="fas fa-envelope"></i>
            <h3>Messages</h3>
            <p>View your messages</p>
            <button 
              className="card-button"
              onClick={() => handleNavigation('/admin/manage-messages')}
            >
              View Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 