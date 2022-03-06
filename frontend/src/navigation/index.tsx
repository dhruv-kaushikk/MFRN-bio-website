import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/homePage/HomePage'
import PortFolioPage from '../pages/portfolioPage/portfolio'
import ProjectPage from '../pages/projectPage/project'
import AboutPage from '../pages/aboutPage/about'
export default function Nav() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortFolioPage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    )
}
