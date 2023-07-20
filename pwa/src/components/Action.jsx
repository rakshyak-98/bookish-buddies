import styled from "styled-components";
import style from "./Action.module.css"
const Container = styled.div``;
const TopBar = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-yale-blue);
    padding: 1rem 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background: white;
`;

const Notifications = styled.div`
    margin-top: 2rem;
    background-color: var(--color-white);
    padding: 1rem;
    box-shadow: var(--box-shadow)
    border-radius: var(--border-radius)
`;

// const Notification = styled.div`
//     padding: 1rem;
//     background: red;
// `

export default function Action() {
    return (
        <Container>
            <TopBar>
                <input
                    style={{
                        flex: 1,
                        padding: "8px 10px",
                        border: "1px solid var(--color-gray)",
                        borderRadius: "var(--border-radius)",
                    }}
                    className={styled.formControl}
                    type="text"
                    placeholder="Search teacher here"
                />
                <span
                    style={{ flex: "0 1", cursor: "pointer"}}
                    className="material-symbols-outlined"
                >
                    settings
                </span>
                <span
                    style={{ flex: "0 1", cursor: "pointer"}}
                    className="material-symbols-outlined"
                >
                    logout
                </span>
            </TopBar>
            <Notifications>
                <div className={style.notificationHeader}>
                    <h2>Notification</h2>
                    <span className="material-symbols-outlined">
                        notifications
                    </span>
                </div>
            </Notifications>
        </Container>
    );
}
