import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 13rem auto 20rem;
`;

export default function Layout({ left: Left, center: Center, right: Right }) {
    return (
        <Container>
            <Left />
            <Center />
            <Right />
        </Container>
    );
}
