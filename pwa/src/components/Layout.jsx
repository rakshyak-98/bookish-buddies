import styled from "styled-components";
import AdminProfile from "../pages/AdminProfile";

const Container = styled.div`
    display: grid;
    grid-template-columns: 13rem auto 20rem;
`;

const Left = styled.aside`
    background: var(--color-white);
    height: 100vh;
    padding: 3rem 0;
    box-shadow: var(--box-shadow);
`;

const Center = styled.div`
    padding: 2rem;
`;


const Right = styled.div`
    height: 100vh;
    padding: 1rem;
`;
// eslint-disable-next-line no-unused-vars
export default function Layout({ left: Nav, center: Main, right: Action}) {
    return (
        <Container>
            <Left>
                <Nav />
            </Left>
            <Center>
                <AdminProfile />
            </Center>
            <Right>
                <Action />
            </Right>
        </Container>
    );
}
