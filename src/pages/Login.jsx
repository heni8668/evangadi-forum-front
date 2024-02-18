import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../utils/axiosConfig";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (!emailValue || !passwordValue) {
      alert("Please enter");
      return;
    }
    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email:---</span>
          <input ref={email} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>Password:---</span>
          <input ref={password} type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </section>
  );
};

export default Login;
