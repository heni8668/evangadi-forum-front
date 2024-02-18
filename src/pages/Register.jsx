import React, { useRef } from "react";
import axios from "../utils/axiosConfig";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const lastname = useRef();
  const firstname = useRef();
  const email = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameValue = username.current.value;
    const firstnameValue = firstname.current.value;
    const lastnameValue = lastname.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordValue
    ) {
      alert("Please enter");
      return;
    }
    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });
      navigate("/login");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>username:---</span>
          <input ref={username} type="text" placeholder="username" />
        </div>
        <br />

        <div>
          <span>First name:---</span>
          <input ref={firstname} type="text" placeholder="first name" />
        </div>
        <br />
        <div>
          <span>Last name:---</span>
          <input ref={lastname} type="text" placeholder="last name" />
        </div>
        <br />
        <div>
          <span>Email:---</span>
          <input ref={email} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <span>Password:---</span>
          <input ref={password} type="password" placeholder="password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </section>
  );
};

export default Register;
