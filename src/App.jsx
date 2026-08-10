import './App.css'
import Nav from './Components/Nav'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Router>
      <div className="relative w-full z-50">
        <Nav />
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recruiters-services/" element={<Recruiter />} />
          <Route path="/employee-services/" element={<Employee />} />
          <Route path="/recruiters/" element={<Gprecuirter />} />
          <Route path="/blogs/" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogsArtical />} />
          <Route path="/job-search/" element={<Job />} />
          <Route path="/healthcare/" element={<Healthcare />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy/" element={<CookiePolicy />} />
          <Route path="/terms/" element={<Term />} />
          <Route path="/help-center/" element={<HelpCenter />} />
          <Route path="/brochures/" element={<Brochures />} />
        </Routes>

      <Footer />
    </Router>
  )
}

export default App