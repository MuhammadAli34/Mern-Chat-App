import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { registerRoute } from "../utils/apiRoye";
import SocialLoginButtons from "../components/SocialLoginButtons";
function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValdidation()) {
      const { username, email, password, confirmPassword } = value;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
        confirmPassword,
      });
      if (data.status === false) {
        toast.error(data.message, ToastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };
  const handleValdidation = () => {
    const { username, email, password, confirmPassword } = value;
    if (username.length < 3) {
      toast.error("Your Username Must Be More Than 3 Charcters", ToastOptions);
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Your Password and ConfirmPassword not Match ", ToastOptions);
      return false;
    } else if (email == "") {
      toast.error("Email Empty ", ToastOptions);
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
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="ConfirmPassword"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="btn">
            Register
          </button>
          <SocialLoginButtons />
          <span>
            Already have an account? <Link to="/login">Login</Link>
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
      background-color: #2b004e;
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
export default Register;
