import React, { useEffect, useRef } from 'react';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
  featured: boolean;
  category: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: "SocialPulse",
      description: "A dynamic platform that analyzes social media trends and user sentiment, empowering businesses and creators with actionable insights to enhance engagement and make data-driven decisions in real time.",
      technologies: ["React", "TypeScript", "Firebase", "CSS3", "MongoDB"],
      githubLink: "https://github.com/iamaffanyasir/SocialPulsev2",
      liveLink: "https://socialpulsev3.vercel.app/sign-in",
      image: "/images/socialpulse.png",
      featured: true,
      category: "Web Development"
    },
    {
      title: "BizQuantum",
      description: "A cutting-edge platform offering comprehensive business analytics and insights, enabling organizations to track performance, identify opportunities, and make informed decisions through intuitive visualizations and real-time data analysis.",
      technologies: ["Python", "Flask", "React"],
      githubLink: "https://github.com/iamaffanyasir/BizQuantum",
      liveLink: "https://biz-quantum.vercel.app/",
      image: "/images/bizquantum.png",
      featured: true,
      category: "Web Development"
    },
    {
      title: "Hashim Law Associates",
      description: "A professional platform designed for efficient client and case management, offering secure document uploads, staff attendance tracking, and streamlined workflows to enhance legal service delivery and collaboration.",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
      githubLink: "https://github.com/iamaffanyasir/HashimLawAssociates",
      liveLink: "https://hashimassociates.vercel.app/",
      image: "/images/hashim.png",
      featured: true,
      category: "Web Development"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubLink: "https://github.com/yourusername/task-app",
      image: "/images/task-app.jpg",
      featured: false,
      category: "Web Development"
    },
    {
      title: "Visualter CRM",
      description: "A comprehensive solution tailored for legal practices, enabling seamless client management, staff attendance tracking, secure document storage, and streamlined workflows to enhance productivity and maintain client confidentiality.",
      technologies: ["React", "Firebase", "Chart.js", "Styled Components", "MongoDB"],
      githubLink: "https://github.com/iamaffanyasir/visualtercrm",
      liveLink: "https://visualtercrm.vercel.app/login",
      image: "/images/crm.png",
      featured: false,
      category: "Others"
    },
    {
      title: "Image Recognition App",
      description: "Mobile application for real-time object detection and image classification using TensorFlow.",
      technologies: ["React Native", "TensorFlow", "Python", "Flask"],
      githubLink: "https://github.com/yourusername/image-recognition",
      image: "/images/image-recognition.jpg",
      featured: false,
      category: "AI/ML"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization and reporting.",
      technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/social-dashboard",
      image: "/images/social-dashboard.jpg",
      featured: false,
      category: "Web Development"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      githubLink: "https://github.com/yourusername/fitness-tracker",
      image: "/images/fitness.jpg",
      featured: false,
      category: "Mobile Apps"
    },
    {
      title: "Blog Platform",
      description: "Full-stack blogging platform with markdown support and user authentication.",
      technologies: ["Next.js", "MongoDB", "AWS S3", "Tailwind"],
      githubLink: "https://github.com/yourusername/blog-platform",
      image: "/images/blog.jpg",
      featured: false,
      category: "Web Development"
    },
    {
      title: "Real Estate App",
      description: "Property listing and management application with virtual tour features.",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
      githubLink: "https://github.com/yourusername/real-estate",
      image: "/images/real-estate.jpg",
      featured: false,
      category: "Web Development"
    },
    {
      title: "Music Streaming App",
      description: "Audio streaming platform with playlist management and social features.",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      githubLink: "https://github.com/yourusername/music-app",
      image: "/images/music.jpg",
      featured: false,
      category: "Web Development"
    },
    {
      title: "Recipe Finder",
      description: "Recipe discovery app with ingredient-based search and meal planning features.",
      technologies: ["React Native", "Firebase", "Recipe API", "Redux"],
      githubLink: "https://github.com/yourusername/recipe-finder",
      image: "/images/recipe.jpg",
      featured: false,
      category: "Mobile Apps"
    },
    {
      title: "Stock Trading Bot",
      description: "Automated trading bot using machine learning for market prediction and analysis.",
      technologies: ["Python", "TensorFlow", "Alpha Vantage API", "MongoDB"],
      githubLink: "https://github.com/yourusername/trading-bot",
      image: "/images/trading.jpg",
      featured: false,
      category: "AI/ML"
    },
    {
      title: "Video Chat App",
      description: "Real-time video conferencing application with screen sharing capabilities.",
      technologies: ["React", "WebRTC", "Socket.io", "Node.js"],
      githubLink: "https://github.com/yourusername/video-chat",
      image: "/images/video-chat.jpg",
      featured: false,
      category: "Web Development"
    },
    {
      title: "Language Learning App",
      description: "Interactive language learning platform with speech recognition and progress tracking.",
      technologies: ["React Native", "Firebase", "TensorFlow.js", "Node.js"],
      githubLink: "https://github.com/yourusername/language-app",
      image: "/images/language.jpg",
      featured: false,
      category: "Mobile Apps"
    }
  ];

  const categories = ["All", "Web Development", "AI/ML", "Mobile Apps", "Others"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  useEffect(() => {
    setFilteredProjects(
      activeCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <section className="projects-page">
      <div className="content-wrapper">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>A collection of my recent work and side projects</p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="featured-grid">
            {filteredProjects
              .filter(project => project.featured)
              .map((project, index) => (
                <div className="featured-card" key={index}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i>
                        </a>
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="other-projects">
          <h2>Other Noteworthy Projects</h2>
          <div className="projects-grid">
            {filteredProjects
              .filter(project => !project.featured)
              .map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="card-header">
                    <div className="project-icon">
                      <i className="fas fa-folder"></i>
                    </div>
                    <div className="project-links">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 