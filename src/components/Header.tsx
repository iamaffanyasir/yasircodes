import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../utils/auth';
import './Header.css';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const checkAuth = async () => {
      const user = await authService.checkAuth();
      setIsAuthenticated(!!user);
    };
    checkAuth();
  }, []);

  const handleAdminClick = () => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    } else {
      navigate('/admin/login');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          YasirCodes
        </Link>

        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={location.pathname === '/resume' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <button 
              className="admin-btn"
              onClick={handleAdminClick}
            >
              {isAuthenticated ? 'Dashboard' : 'Admin'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 