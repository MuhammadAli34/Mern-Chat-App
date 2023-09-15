import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { checkUserNameRoute, registerRoute } from "../utils/apiRoye";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseConfig";
import { debounce } from "../utils/Debounce";

function SetUserName() {
  const navigate = useNavigate();
  const [value, setValues] = useState("");
  const [label, setLabel] = useState("");
  const [email, setEmail] = useState(undefined);
  const [usernameStatus, setUsernamStatus] = useState(undefined);
  onAuthStateChanged(firebaseAuth, (userData) => {
    if (!userData) {
      navigate("/");
    } else {
      setEmail(
        userData.email ? userData.email : userData.providerData[0].email
      );
    }
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

  const validateForm = () => {
    if (value.length < 3) {
      toast.error(
        "username should be greater than 3 characters.",
        ToastOptions
      );
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { data } = await axios.post(registerRoute, {
        username: value,
        email,
        password: (Math.random() + 1).toString(20).substring(1),
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
  const handleChange = debounce((name) => checkUsername(name), 300);
  const checkUsername = async (username) => {
    if (username.length > 3) {
      const { data } = await axios.post(checkUserNameRoute, { username });
      setUsernamStatus(data.status);
      setLabel(data.msg);
      setValues(username);
    }
  };

  return (
    <>
      <FormContainer>
        {email && (
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="brand">
              <img src={logo} alt="logo" />
              <h1>MA Chat</h1>
            </div>
            <span>Check Username Availablity</span>
            <div className="row">
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e.target.value)}
                min="3"
                className={`${
                  usernameStatus
                    ? "success"
                    : usernameStatus !== undefined
                    ? "danger"
                    : ""
                }`}
              />
              <label
                htmlFor=""
                className={`${
                  usernameStatus
                    ? "success"
                    : usernameStatus !== undefined
                    ? "danger"
                    : ""
                }`}
              >
                {label}
              </label>
            </div>
            <button type="submit" className="btn">
              CreateUser
            </button>

            <span>
              You Have An account? <Link to="/login">Login</Link>
            </span>
          </form>
        )}
      </FormContainer>
      <ToastContainer />
    </>
  );
}
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .row {
    label {
      display: block;
      margin: 10px 0 0 5px;
      transition: 0.3s ease-in-out;
      height: 0.5rem;
    }
    label.success {
      color: #39ff14;
    }
    label.danger {
      color: #ff3131;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }

  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    transition: 0.3s ease-in-out;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  .success {
    border-color: #39ff14;
    &:focus {
      border-color: #39ff14;
    }
  }
  .danger {
    border-color: #ff3131;
    &:focus {
      border-color: #ff3131;
    }
  }
  .btn {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }

  span {
    color: white;
    text-transform: uppercase;
  }
`;

export default SetUserName;
