import styled from "styled-components";
import style from "./LoginForm.module.css"
import calendarImage from "../assets/calendar.svg"
import {FcGoogle} from 'react-icons/fc'

const Container = styled.div`
    padding: 10rem;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
`;

const Left = styled.div`
    flex: 1 ;
`

const Right = styled.div`
    background-color: var(--color-ultramarine-blue, red);
    color: white;
    height: 100%;
    border-radius: var(--border-radius);
    padding: 4rem;
    overflow: hidden;
`

export default function LoginForm() {
    return (
        <Container>
            <Left>
                <div className={style.leftText}>
                    <h2>Get Started Now</h2>
                    <p className={style.subHeading}>Enter your credentials to access your account</p>
                </div>
                <a href="#auth-google" className={style.googelBtn}>
                    <FcGoogle />
                    <span>Log in Google</span>
                </a>
                <div className={style.separator}>or</div>
                <form className={style.form}>
                    <input className={style.formControl} type="text" name="username" placeholder="@uername" required/>
                    <input className={style.formControl} type="email" name="email" placeholder="@gmail.com" required/>
                    <a className={style.forgotPassword} href="#forgot-password">Forgot password?</a>
                    <input className={style.formControl} type="password" placeholder="**********" required/>
                    <button className={style.loginBtn}>Login</button>
                </form>
            </Left>
            <Right>
                <h2 className={style.rightHeading}>The simplest way to manage your workforce</h2>
                <p className={style.subHeading}>Enter your credentials to access your account</p>
                <img className={style.img} src={calendarImage} alt="image" />
                <a href="https://www.freepik.com/free-vector/build-your-program-appointment-booking_8351263.htm#query=calendar&position=32&from_view=keyword&track=sph">Freepik</a>
            </Right>
        </Container>
    );
}

// Image by 