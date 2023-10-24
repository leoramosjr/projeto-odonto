import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import LandingPage from '../pages/Landing';
import TestPage from '../pages/Test';

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/test" element={<TestPage />} />
        </Routes>
    </Router>
  );
}
