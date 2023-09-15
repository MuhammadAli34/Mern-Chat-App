import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { loginRoute } from "../utils/apiRoye";
import SocialLoginButtons from "../components/SocialLoginButtons";

function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(import.meta.env.VITE_LOCAL)) {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValdidation()) {
      const { username, password } = value;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.message, ToastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          import.meta.env.VITE_LOCAL,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };
  const handleValdidation = () => {
    const { username, password } = value;
    if (username.length === "") {
      toast.error("Username is Required", ToastOptions);
      return false;
    } else if (password === "") {
      toast.error("Password is Required ", ToastOptions);
      return false;
    }
    return true;
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <>
      <FormContainer>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="brand">
            <img src={logo} alt="logo" />
            <h1>MA Chat</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <button type="submit" className="btn">
            Login
          </button>
          <SocialLoginButtons />
          <span>
            You Don'y Have An account? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #18181b;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  img {
    width: 50px;
    height: 50px;
  }
  h1 {
    color: white;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background-color: #09090b;
    padding: 3rem 5rem;
    border-radius: 2rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #0d0d2e;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #2b004e;
        outline: none;
      }
    }
    .btn {
      background-color: #281e31;
      padding: 1rem;
      border-radius: 0.4rem;
      cursor: pointer;
      padding: 1rem 2rem;
      color: white;
      border: none;
      font-size: 1rem;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #0d0d2e;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        text-transform: none;
        text-decoration: none;
        font-weight: bold;
        color: #6f6df5;
      }
    }
  }
`;
export default Login;
