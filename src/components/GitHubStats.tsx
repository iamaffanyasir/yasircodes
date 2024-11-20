import React, { useEffect, useState } from 'react';
import './GitHubStats.css';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  created_at: string;
  avatar_url: string;
  bio: string;
  location: string;
  blog: string;
  name: string;
  login: string;
}

const GitHubStats: React.FC = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/iamaffanyasir');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return <div className="github-stats-loading">Loading GitHub stats...</div>;
  }

  if (!userData) {
    return null;
  }

  const joinDate = new Date(userData.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <section className="github-stats">
      <div className="content-wrapper">
        <h2 className="section-heading">
          <span>03.</span> GitHub Statistics
        </h2>
        <div className="github-content">
          <div className="github-profile">
            <img src={userData.avatar_url} alt="GitHub Profile" className="github-avatar" />
            <div className="github-bio">
              <h3>{userData.name || userData.login}</h3>
              {userData.bio && <p>{userData.bio}</p>}
              <div className="github-info">
                {userData.location && (
                  <span>
                    <i className="fas fa-map-marker-alt"></i> {userData.location}
                  </span>
                )}
                <span>
                  <i className="fas fa-calendar-alt"></i> Joined {joinDate}
                </span>
                {userData.blog && (
                  <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link"></i> Portfolio
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="github-stats-grid">
            <div className="stat-card">
              <i className="fas fa-code-branch"></i>
              <h3>{userData.public_repos}</h3>
              <p>Repositories</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-users"></i>
              <h3>{userData.followers}</h3>
              <p>Followers</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-user-friends"></i>
              <h3>{userData.following}</h3>
              <p>Following</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-code"></i>
              <h3>{userData.public_gists}</h3>
              <p>Gists</p>
            </div>
          </div>

          <div className="github-graphs">
            {/* GitHub Stats Card */}
            <div className="graph-card">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=iamaffanyasir&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a192f&title_color=64ffda&icon_color=64ffda&text_color=8892b0&count_private=true&include_all_commits=true`} 
                alt="GitHub Stats" 
              />
            </div>

            {/* Languages Card */}
            <div className="graph-card">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=iamaffanyasir&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a192f&title_color=64ffda&text_color=8892b0&langs_count=6`} 
                alt="Most Used Languages" 
              />
            </div>

            {/* Streak Stats */}
            <div className="graph-card full-width">
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com?user=iamaffanyasir&theme=tokyonight&hide_border=true&background=0a192f&stroke=64ffda&ring=64ffda&fire=64ffda&currStreakNum=8892b0&sideNums=8892b0&currStreakLabel=64ffda&sideLabels=64ffda&dates=8892b0`} 
                alt="GitHub Streak" 
              />
            </div>

            {/* Contribution Graph */}
            <div className="graph-card full-width">
              <img 
                src={`https://github-readme-activity-graph.vercel.app/graph?username=iamaffanyasir&theme=react-dark&bg_color=0a192f&color=64ffda&line=64ffda&point=ffffff&area=true&hide_border=true`} 
                alt="Contribution Graph"
              />
            </div>
          </div>

          <div className="github-links">
            <a 
              href={`https://github.com/${userData.login}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              <i className="fab fa-github"></i> View Full Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats; 