import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MERNY</h3>
          <span className="loginDesc">
            We connect you to the world.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Full Name"
              required
              className="loginInput"
            />
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email address"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Confirm Password"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Register
            </button>
            <div>
              Already have an account ?
              <button className="loginRegisterButton">Log into Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
