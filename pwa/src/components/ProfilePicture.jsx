import styled from "styled-components";
import style from "./ProfilePicture.module.css"

const StyledProfile = styled.div`
    padding: 1rem;
    width: 100px;
    height: 100px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    background-color: var(--color-white);
`
export default function ProfilePicture({imageUrl}) {
  return (
    <StyledProfile>
        <img className={style.profile_image} src={imageUrl} alt="profile picture" />
    </StyledProfile>
  )
}
