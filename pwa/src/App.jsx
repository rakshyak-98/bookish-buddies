import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "../node_modules/react-router-dom/dist/index";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
}

export default App;