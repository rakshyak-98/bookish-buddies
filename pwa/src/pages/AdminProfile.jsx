import styled from "styled-components";
import ProfilePicture from "../components/ProfilePicture";
import imageDummy from "../assets/react.svg";
import DataTable from "../components/DataTable";

const Layout = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
`;

const Card = styled.div`
    width: 100%;
    background: white;
    box-shadow: var(--box-shadow);
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--border-radius);
`;

const RecentTeacherCreated = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

const AddMoreBtn = styled.div`
    background-color: var(--color-ultramarine-blue);
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function AdminProfile() {
    return (
        <Layout>
            <Card>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <ProfilePicture imageUrl={imageDummy} />
                    <div>
                        <h3 style={{ fontSize: "18px" }}>Sayo Kravits</h3>
                        <p
                            style={{
                                color: "var(--color-gray)",
                                fontSize: "13px",
                            }}
                        >
                            Public Relations
                        </p>
                    </div>
                </div>
            </Card>
            <Card>
                <RecentTeacherCreated>
                    <AddMoreBtn>
                        <span className="material-symbols-outlined" style={{color: "var(--color-white)"}}>add</span>
                    </AddMoreBtn>
                    <ProfilePicture imageUrl={imageDummy}/>
                </RecentTeacherCreated>
            </Card>
            <div>
                <DataTable />
            </div>
        </Layout>
    );
}
