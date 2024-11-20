import React from 'react';
import './FeaturedProjects.css';

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="featured-projects">
      <h2 className="section-heading">
        <span>03.</span> Some Things I've Built
      </h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-content">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">Project Name</h3>
            <div className="project-description">
              <p>
                A brief description of your project goes here. Talk about the problem
                it solves and the technologies you used to build it.
              </p>
            </div>
            <ul className="project-tech-list">
              <li>React</li>
              <li>TypeScript</li>
              <li>Firebase</li>
              <li>Node.js</li>
            </ul>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <div className="project-image">
            <img src="path-to-your-project-image.jpg" alt="Project screenshot" />
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default FeaturedProjects; 