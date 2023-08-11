import styled from "styled-components";
// import AdminProfile from "../pages/AdminProfile";
// import Student from "../pages/Student";
// import Teacher from "../pages/Teacher";
import Calendar from "./Calendar";

const Container = styled.div`
    display: grid;
    grid-template-columns: 13rem auto 20rem;
`;

const Left = styled.aside`
    background: var(--color-white);
    height: 100vh;
    padding: 3rem 0;
    // box-shadow: var(--box-shadow);
    border-right: 1px solid var(--color-gray);
`;

const Center = styled.div`
    // padding: 2rem;
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
                <Nav role={"student"}/>
            </Left>
            <Center>
                <Calendar />
            </Center>
            <Right>
            </Right>
        </Container>
    );
}
