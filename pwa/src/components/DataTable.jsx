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
                    <tr>
                        <td>Rakshyak</td>
                        <td>Computer </td>
                        <td>Computer</td>
                        <td>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Rakshyak</td>
                        <td>Computer</td>
                        <td>Computer</td>
                        <td>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <TableController>
                <button>filter</button>
                <button>page-nation</button>
            </TableController>
        </Container>
    );
}
