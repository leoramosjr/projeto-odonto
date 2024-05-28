import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import TestPage from '../pages/Test';
import ClientList from '../pages/ClientList';
import ClientView from '../pages/ClientView';
import Callendar from '../pages/Calendar';
import Tasks from '../pages/Tasks';

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="" element={<Callendar />} />
            <Route path="clients">
                <Route path="" element={<ClientList />} index />
                <Route path=":id" element={<ClientView />} />
                <Route path="*" element={<Navigate to="clients" />} />
            </Route>
            <Route path="tasks" element={<Tasks />} />
            <Route path="test" element={<TestPage />} />
            <Route path="*" element={<Navigate to="" />}/>
        </Routes>
    </Router>
  );
}