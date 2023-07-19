import styled from "styled-components";
import ProfilePicture from "../components/ProfilePicture";
import imageDummy from "../assets/react.svg"

const Layout = styled.div`
    width: 100%;
`
    
const ProfileHeader = styled.div`
    width: 100%;
    background: white;
    box-shadow: var(--box-shadow);
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--border-radius)
`

const RecentTeacherCreated = styled.div``

export default function AdminProfile() {
  return (
    <Layout>
        <ProfileHeader>
            <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                <ProfilePicture imageUrl={imageDummy}/>
                <div>
                    <h3 style={{fontSize: "18px"}}>Sayo Kravits</h3>
                    <p style={{color: "var(--color-gray)", fontSize: "13px"}}>Public Relations</p>
                </div>
            </div>
        </ProfileHeader>
        <RecentTeacherCreated>

        </RecentTeacherCreated>
    </Layout>
  )
}
