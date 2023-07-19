import styled from "styled-components";
import style from "./Nav.module.css";

const SideNavStyled = styled.aside`
    background: var(--color-soft-blue);
    height: 100vh;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    padding: 3rem 0;
`;

export default function Nav() {
    return (
        <SideNavStyled>
            <a href="#" className={style.option}>
                <span className="material-symbols-outlined">
                    space_dashboard
                </span>
                <h3>Dashboard</h3>
            </a>
            <a href="#" className={style.option}>
                <span className="material-symbols-outlined">mail</span>
                <h3>Mail</h3>
            </a>
            <a href="#" className={style.option}>
                <span className="material-symbols-outlined">group</span>
                <h3>Accounts</h3>
            </a>
        </SideNavStyled>
    );
}
