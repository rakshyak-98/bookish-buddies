import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Action from "./components/Action"
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";


function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        setAuthenticated(true);
    }, []);

    return (
        <>
            {isAuthenticated ? (
                <Layout left={Nav} center={<div>center</div>} right={Action} />
            ) : (
                <div>
                    <LoginForm />
                </div>
            )}
        </>
    );
}

export default App;