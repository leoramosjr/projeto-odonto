import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/Login';
import Client from '../pages/Client';
import TestPage from '../pages/Test';
import ProviderHome from '../pages/Provider/ProviderHome';
import ProviderClientView from '../pages/Provider/ProviderClientView';
import ProviderPlans from '../pages/Provider/ProviderPlans';
import ProviderDashboard from '../pages/Provider/ProviderDashboard';

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<LoginPage />} />
            <Route path="provider">
                <Route path="home" element={<ProviderHome />} />
                <Route path="client/:id" element={<ProviderClientView />} />
                <Route path="plans" element={<ProviderPlans />} />
                <Route path="dashboard" element={<ProviderDashboard />} />
            </Route>
            <Route path="client" element={<Client />} />
            <Route path="test" element={<TestPage />} />
        </Routes>
    </Router>
  );
}
