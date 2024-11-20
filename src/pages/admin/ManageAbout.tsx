import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageAbout.css';

const ManageAbout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="manage-container">
      <div className="manage-header">
        <button 
          className="back-button"
          onClick={() => navigate('/admin/dashboard')}
        >
          <i className="fas fa-arrow-left"></i> Back to Dashboard
        </button>
        <h1>Manage About</h1>
      </div>
      <div className="manage-content">
        <p>About page management coming soon...</p>
      </div>
    </div>
  );
};

export default ManageAbout; 