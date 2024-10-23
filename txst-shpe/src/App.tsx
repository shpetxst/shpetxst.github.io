import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SHPEtinasPage from './components/SHPEtinas';
import CalendarPage from './components/calendar';
import MeritsPage from './components/merits';
import OfficersPage from './components/officers';
import ContactPage from './components/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shpetinas" element={<SHPEtinasPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/merits" element={<MeritsPage />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;