import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GitHubStats from './components/GitHubStats';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Resume from './pages/Resume';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageProjects from './pages/admin/ManageProjects';
import ManageResume from './pages/admin/ManageResume';
import ManageAbout from './pages/admin/ManageAbout';
import ManageMessages from './pages/admin/ManageMessages';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'YasirCodes';
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <About />
                  <GitHubStats />
                </main>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/manage-projects" element={
                <ProtectedRoute>
                  <ManageProjects />
                </ProtectedRoute>
              } />
              <Route path="/admin/manage-resume" element={
                <ProtectedRoute>
                  <ManageResume />
                </ProtectedRoute>
              } />
              <Route path="/admin/manage-about" element={
                <ProtectedRoute>
                  <ManageAbout />
                </ProtectedRoute>
              } />
              <Route path="/admin/manage-messages" element={
                <ProtectedRoute>
                  <ManageMessages />
                </ProtectedRoute>
              } />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
