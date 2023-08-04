import { styled } from "styled-components";
import style from "./TeacherService.module.css";

const Nav = styled.nav`
    max-width: 300px;
    height: 100vh;
    padding: 2rem;
    border-right: 1px solid var(--color-gray);
`;
export default function TeacherService() {
    return (
        <div>
            <Nav>
                <h2 className={style.h2}>Services & classes</h2>
                <ul>
                    <li className={style.nav__list__header}>
                        <p>Create New class</p>
                        <span className="material-symbols-outlined">
                            add
                        </span>
                    </li>
                    {[{id: 1, name: "C++"}].map(
                        data => <li key={data.id} className={style.nav__list__item}>{data.name}</li>
                    )}
                </ul>
            </Nav>
        </div>
    );
}
