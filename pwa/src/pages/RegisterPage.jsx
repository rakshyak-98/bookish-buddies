import { useState } from "react";
import image from "../assets/right-login-image.svg";
export default function RegisterPage() {
    const [show, setShow] = useState(false);
    return (
        <main>
            <div className="loginPage__wrapper">
                <div className="left">
                    <form method="dialog">
                        <h2>Register User</h2>
                        <div className="form__control">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="xyz@gmail.com" />
                        </div>
                        <div className="form__control">
                            <label htmlFor="password">Password</label>
                            <div className="form__group">
                                <input
                                    type={show ? "text" : "password"}
                                    placeholder="*******"
                                />
                                <span className="material-symbols-outlined" onClick={() => setShow(!show)}>
                                    {show ? "visibility" : "visibility_off"}
                                </span>
                            </div>
                        </div>
                        <a href="#register" className="btn btn--block">
                            Register
                        </a>
                    </form>
                    <p className="separator">or</p>
                    <a href="#google-oauth" className="btn btn--outlined">
                        Sign in with google
                    </a>
                </div>
                <div className="right">
                    <img src={image} alt="" />
                    <a
                        hidden
                        href="https://www.freepik.com/free-vector/sign-concept-illustration_12892962.htm#query=login&position=18&from_view=search&track=sph">
                        Image by storyset
                    </a>
                </div>
            </div>
        </main>
    );
}
