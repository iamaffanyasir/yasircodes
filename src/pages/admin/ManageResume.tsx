import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageResume.css';

const ManageResume: React.FC = () => {
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
        <h1>Manage Resume</h1>
      </div>
      <div className="manage-content">
        <p>Resume management coming soon...</p>
      </div>
    </div>
  );
};

export default ManageResume; 