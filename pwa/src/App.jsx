import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import Analytics from "./pages/Analytics";
import Message from "./pages/Message";
import Layout from "./pages/Layout";
import Tools from "./pages/Tools";
import Settings from "./pages/Settings";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/overview" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/message" element={<Message />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
