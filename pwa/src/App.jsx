import styled from "styled-components";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";

const Center = styled.div`
    background: var(--color-honeydew);
`;

const Right = styled.div`
    height: 100vh;
    background: teal;
`;

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        setAuthenticated(false);
    }, []);

    return (
        <>
            {isAuthenticated ? (
                <Layout left={Nav} center={Center} right={Right} />
            ) : (
                <div>
                    <LoginForm />
                </div>
            )}
        </>
    );
}

export default App;
