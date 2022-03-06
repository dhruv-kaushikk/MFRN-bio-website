import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/homePage/HomePage'
import PortFolioPage from '../pages/portfolioPage/portfolio'
export default function Nav() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortFolioPage />} />
            </Routes>
        </Router>
    )
}
