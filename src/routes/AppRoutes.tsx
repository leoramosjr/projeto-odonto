import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/Login';
import Provider from '../pages/Provider';
import Client from '../pages/Client';
import TestPage from '../pages/Test';

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<LoginPage />} />
            <Route path="/provider" element={<Provider />} />
            <Route path="/client" element={<Client />} />
            <Route path="/test" element={<TestPage />} />
        </Routes>
    </Router>
  );
}
