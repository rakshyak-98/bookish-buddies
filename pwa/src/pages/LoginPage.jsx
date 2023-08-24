import { useState } from "react";
import image from "../assets/right-login-image.svg";
import { authenticate } from "../redux/features/authSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"

export default function LoginPage() {
    const [show, setShow] = useState(false);
    const authDispatch = useDispatch();
    function handleSubmit(event) {
        const formData = new FormData(event.target);
        if (!formData.get("email") || !formData.get("password")) {
            toast.error("Please fill the details");
            return;
        }
        authDispatch(
            authenticate({
                email: formData.get("email"),
                password: formData.get("password"),
            })
        );
    }
    return (
        <>
            <main>
                <div className="loginPage__wrapper">
                    <div className="left">
                        <form method="dialog" onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="form__control">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder="xyz@gmail.com"
                                    name="email"
                                />
                            </div>
                            <div className="form__control">
                                <label htmlFor="password">Password</label>
                                <div className="form__group">
                                    <input
                                        type={show ? "text" : "password"}
                                        placeholder="*******"
                                        name="password"
                                    />
                                    <span
                                        className="material-symbols-outlined"
                                        onClick={() => setShow(!show)}>
                                        {show ? "visibility" : "visibility_off"}
                                    </span>
                                </div>
                            </div>
                            <a href="#forgot-password" className="link">
                                Forgot Password?
                            </a>
                            <button className="btn btn--block">Login</button>
                            <Link to="/register" className="btn btn--outlined">
                                Register
                            </Link>
                        </form>
                        <p className="separator">or</p>
                        <a href="http://localhost:8000/google" className="btn btn--outlined">
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
            <ToastContainer />
        </>
    );
}
