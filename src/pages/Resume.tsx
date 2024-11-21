import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  const resumeLink = "/resume.pdf"; // Updated path to your resume

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Visualter - Self Employed",
      location: "New Delhi, India",
      period: "2019 - Present",
      points: [
        "Developed and maintained multiple web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and improved application performance by 40%",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Led a team of 3 developers in successful project deliveries"
      ]
    },

    {
      title: "IoT Developer Trainee",
      company: "Samsung Innovation Campus",
      location: "New Delhi, India",
      period: "Sep 2024 - Dec 2024",
      points: [
        "Developed and maintained multiple web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and improved application performance by 40%",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Led a team of 3 developers in successful project deliveries"
      ]
    },
    {
      title: "Front End Developer Intern",
      company: "BlinksWeb Technology",
      location: "New Delhi, India",
      period: "Jan 2023 - July 2023",
      points: [
        "Developed and maintained multiple web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and improved application performance by 40%",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Led a team of 3 developers in successful project deliveries"
      ]
    },
    {
      title: "Python Developer Intern",
      company: "Tech Explica",
      location: "New Delhi, India",
      period: "Jan 2019 - July 2019",
      points: [
        "Developed and maintained multiple web applications using React, Node.js, and MongoDB",
        "Implemented responsive designs and improved application performance by 40%",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Led a team of 3 developers in successful project deliveries"
      ]
    },
    // Add more experiences
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      school: "Jamia Hamdard University",
      location: "New Delhi, India",
      period: "2021 - 2024",
      achievements: [
        "Graduated with First Class Honours",
        "Specialized in Artificial Intelligence and Machine Learning",
        "Led multiple technical projects",
        "GPA: 3.8/4.0"
      ]
    },
    {
      degree: "Diploma in Computer Science",
      field: "Computer Science",
      school: "Aditya Institute of Technology",
      location: "New Delhi, India",
      period: "2016 - 2019",
      achievements: [
        "Graduated with First Class Honours",
        "Specialized in Artificial Intelligence and Machine Learning",
        "Led multiple technical projects",
        "GPA: 3.8/4.0"
      ]
    },
    // Add more education
  ];

  const skills = {
    technical: [
      "JavaScript (ES6+)", "TypeScript", "React.js", "Node.js",
      "Python", "MongoDB", "SQL", "AWS", "Docker"
    ],
    frameworks: [
      "Next.js", "Express.js", "Django", "React Native"
    ],
    tools: [
      "Git", "Webpack", "Babel", "Jest", "GitHub Actions"
    ],
    design: [
      "Figma", "Adobe XD", "Responsive Design", "UI/UX"
    ]
  };

  const certifications = [
    {
      name: "Internet of Things",
      issuer: "Samsung Innovation Campus",
      date: "December 2024",
      link: "#"
    },
    {
      name: "NodeJS",
      issuer: "Scaler Topics",
      date: "July 2023",
      link: "https://drive.google.com/file/d/13oOCXge9G4ouLYqs17yq-PE0n0XYqcAo/view?usp=drive_link"
    },
    {
      name: "JavaScript - Mastering the Fundamentals",
      issuer: "Scaler Topics",
      date: "July 2023",
      link: "https://drive.google.com/file/d/1gP8rNVM3DhEaL8Tjoy20NYaDHzY0B3UD/view?usp=drive_link"
    },
    {
      name: "Python and SQL for Data Science",
      issuer: "Scaler Topics",
      date: "August 2023",
      link: "https://drive.google.com/file/d/1gVyNuhGfrNdSgMYUPXK_Pl2wsUdJYCtX/view?usp=drive_link"
    },
    {
      name: "SQL for Beginners",
      issuer: "Scaler Topics",
      date: "August 2023",
      link: "https://drive.google.com/file/d/10RNjhh87OzmSKn2oniCC57f4GeuWu28h/view?usp=drive_link"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1268-CiZzKmNuqGtkQ0bN5bM2XrbqgVhu/view?usp=drive_link"
    },
    {
      name: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1dVJGeohDBE8XotKhshMnXuDFabIvQlQv/view?usp=drive_link"
    }
  ];
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'Affan_Yasir_Resume.pdf';
    link.type = 'application/pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-page">
      <div className="content-wrapper">
        <div className="resume-header">
          <div className="header-content">
            <h1>Resume</h1>
            <p>My Professional Background</p>
          </div>
          <button 
            onClick={handleDownload}
            className="download-btn"
          >
            <i className="fas fa-download"></i> Download PDF
          </button>
        </div>

        <div className="resume-grid">
          <div className="main-content">
            <div className="resume-section">
              <h2><i className="fas fa-briefcase"></i> Work Experience</h2>
              {experience.map((job, index) => (
                <div className="experience-item" key={index}>
                  <div className="item-header">
                    <h3>{job.title}</h3>
                    <span className="period">{job.period}</span>
                  </div>
                  <h4>{job.company} • {job.location}</h4>
                  <ul>
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="resume-section">
              <h2><i className="fas fa-graduation-cap"></i> Education</h2>
              {education.map((edu, index) => (
                <div className="education-item" key={index}>
                  <div className="item-header">
                    <h3>{edu.degree} in {edu.field}</h3>
                    <span className="period">{edu.period}</span>
                  </div>
                  <h4>{edu.school} • {edu.location}</h4>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="side-content">
            <div className="resume-section">
              <h2><i className="fas fa-code"></i> Technical Skills</h2>
              {Object.entries(skills).map(([category, items]) => (
                <div className="skills-category" key={category}>
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className="skills-list">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-section">
              <h2><i className="fas fa-certificate"></i> Certifications</h2>
              {certifications.map((cert, index) => (
                <div className="certification-item" key={index}>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer} • {cert.date}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 