import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import PrivacyPolicy from './Components/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;