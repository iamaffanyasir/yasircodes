import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // For mobile devices, simply add the visible class without animation
      if (sectionRef.current) {
        sectionRef.current.classList.add('visible');
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-100px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technologies = {
    frontend: [
      { name: 'React.js', icon: 'fab fa-react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'fab fa-node-js', color: '#000000' },
      { name: 'TypeScript', icon: 'fas fa-code', color: '#3178C6' },
      { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
      { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
      { name: 'CSS3/SASS', icon: 'fab fa-sass', color: '#CC6699' },
      { name: 'Redux', icon: 'fas fa-layer-group', color: '#764ABC' },
      { name: 'Material-UI', icon: 'fas fa-palette', color: '#0081CB' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38B2AC' }
    ],
    backend: [
      { name: 'Node.js', icon: 'fab fa-node', color: '#339933' },
      { name: 'Express.js', icon: 'fas fa-server', color: '#000000' },
      { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
      { name: 'Django', icon: 'fas fa-cube', color: '#092E20' },
      { name: 'RESTful APIs', icon: 'fas fa-exchange-alt', color: '#FF5733' },
      { name: 'GraphQL', icon: 'fas fa-project-diagram', color: '#E535AB' }
    ],
    databases: [
      { name: 'MongoDB', icon: 'fas fa-database', color: '#47A248' },
      { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
      { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' }
    ],
    tools: [
      { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
      { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
      { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
      { name: 'Vercel', icon: 'fas fa-cloud', color: '#000000' },
      { name: 'Netlify', icon: 'fas fa-globe', color: '#00C7B7' },
      { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' }
    ],
    other: [
      { name: 'CI/CD', icon: 'fas fa-sync-alt', color: '#16C60C' },
      { name: 'Agile/Scrum', icon: 'fas fa-users-cog', color: '#FF6B6B' },
      { name: 'Jest', icon: 'fas fa-vial', color: '#C21325' },
      { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' }
    ]
  };

  return (
    <section id="about" className="about scroll-reveal" ref={sectionRef}>
      <h2 className="section-heading reveal-item">
        <span>02.</span> About Me
      </h2>
      <div className="about-content">
        <div className="about-text reveal-item">
          <p>
          Hello! I’m Mohammad Affan Yasir, a passionate developer with a strong foundation in crafting innovative solutions across various domains. My journey in technology has allowed me to work extensively with modern frameworks and tools, including IoT systems, mobile app development, and web technologies.
          </p>
          <p>
          Over the years, I’ve honed my skills in technologies like React Native for mobile app development, ESP32 and ESP8266 for embedded systems, and cutting-edge web tools to build seamless and responsive user experiences. From hardware-software integrations to database management and cloud services, I’m adept at leveraging the right tools to solve complex problems efficiently.
          </p>
          <p>
          One of my notable projects, the RideAlert Smart Helmet, exemplifies my commitment to blending safety with technology, delivering real-world solutions that matter. My passion lies in experimenting with new technologies, constantly learning, and pushing the boundaries of what’s possible.
          </p>
        </div>

        <div className="tech-stack reveal-item">
          <h3>Technologies I work with</h3>
          
          <div className="tech-categories">
            {Object.entries(technologies).map(([category, techs], categoryIndex) => (
              <div className="tech-category" key={category}>
                <div className="category-header">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  <div className="category-line"></div>
                </div>
                <div className="tech-grid">
                  {techs.map((tech, techIndex) => (
                    <div className="tech-item" key={techIndex}>
                      <div className="tech-icon" style={{ color: tech.color }}>
                        <i className={tech.icon}></i>
                      </div>
                      <span>{tech.name}</span>
                    </div>
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

export default About; 