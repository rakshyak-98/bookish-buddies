import styled from "styled-components";
import style from "./AddTeacherModal.module.css";

const Overlay = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: var(--color-transparent);
    display: ${(props) => (props.isopen ? "block" : "none")};
`;

const Card = styled.div`
    border-radius: var(--border-radius);
    background-color: var(--color-white);
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

const CardBody = styled.div``;
const Form = styled.form`
    --padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const FormControl = styled.input`
    padding: var(--padding);
    outline: none;
    border: 1px solid var(--color-white-smoke);
    border-radius: var(--border-radius);
`;

const FormSelect = styled.select`
    padding: var(--padding);
    border: 1px solid var(--color-white-smoke);
    border-radius: var(--border-radius);
`;

const Button = styled.button`
    padding: var(--padding);
    background: var(--color-ultramarine-blue);
    color: var(--color-white);
    font-size: var(--font-btn);
    border: none;
    border-radius: var(--border-radius);
`;

export default function AddTeacherModal({ isopen, onclose }) {
    return (
        <Overlay isopen={isopen} >
            <Card>
                <CardHeader>
                    <h2 className={style.h2}>Add Teacher</h2>
                    <span
                        onClick={onclose}
                        className="material-symbols-outlined">
                        close
                    </span>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormControl placeholder="Teacher name" />
                        <FormSelect title="Department">
                            <option>Admin</option>
                            <option>Staff</option>
                            <option>Proxy</option>
                        </FormSelect>
                        <FormSelect title="Subject">
                            <option>Math</option>
                            <option>Geo</option>
                            <option>IT</option>
                        </FormSelect>
                        <Button>Create</Button>
                    </Form>
                </CardBody>
            </Card>
        </Overlay>
    );
}
