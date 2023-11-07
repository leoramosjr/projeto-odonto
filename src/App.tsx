import AppRoutes from "./routes/AppRoutes";
import axios from "axios";
import './styles/global.css';

axios.defaults.baseURL = "http://localhost:3001";

export default function App() {

  return (
    <AppRoutes />
  )
}