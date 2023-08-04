import styled from "styled-components";
import style from "./DataTable.module.css";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;
const Container = styled.div`
    margin-top: 4rem;
    border-radius: var(--border-radius);
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    padding: 2rem 0 0 0;
`;
const TableController = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

export default function DataTable() {
    return (
        <Container>
            <Table>
                <thead className={style.thead}>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {[{id: 1, name: "Rakshyak", department: "staff", subject: "Computer science"}].map(data =>  <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.department}</td>
                        <td>{data.subject}</td>
                        <td>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
            <TableController>
                <button>filter</button>
                <button>page-nation</button>
            </TableController>
        </Container>
    );
}
