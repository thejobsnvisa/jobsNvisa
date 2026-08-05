import './App.css'
import { useEffect } from 'react'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Recruiter from './pages/Recruiter'
import Employee from './pages/Employee'
import Gprecuirter from './pages/Gprecuirter'
import Blog from './pages/Blog'
import BlogsArtical from './pages/BlogsArtical'
import Job from './pages/Job'
import Healthcare from './pages/Healthcare'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import Term from './pages/Term'
import HelpCenter from './pages/HelpCenter'
import Brochures from './pages/Brochures'

// Handles deep-link URL restoration when coming from GitHub Pages 404 redirect
function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if URL has redirect query param from 404.html (e.g., ?/job-search)
    if (location.search.startsWith('?/')) {
      const targetPath = location.search.slice(2).replace(/~and~/g, '&');
      navigate(targetPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
   <Router basename="/jobsNvisa">
      <RedirectHandler />
      
      {/* Ensures Navbar stays relative and doesn't get overlapped */}
      <div className="relative w-full z-50">
        <Nav />
      </div>

      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruiters-services" element={<Recruiter />} />
          <Route path="/employee-services" element={<Employee />} />
          <Route path="/recruiters" element={<Gprecuirter />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogsArtical />} />
          <Route path="/job-search" element={<Job />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms" element={<Term />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/brochures" element={<Brochures />} />

          {/* Catch-all route: Redirects unknown routes back to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}

export default App