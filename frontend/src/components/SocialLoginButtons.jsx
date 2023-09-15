import React from "react";
import styled from "styled-components";
import { BsGithub, BsGoogle } from "react-icons/bs";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import { firebaseAuth } from "../utils/firebaseConfig";
import { firebaseLoginRoute } from "../utils/apiRoye";
import { useNavigate } from "react-router-dom";

function SocialLoginButtons() {
  const navigate = useNavigate();
  const providers = {
    google: new GoogleAuthProvider(),
    github: new GithubAuthProvider(),
  };
  const firebaseLogin = async (loginType) => {
    try {
      const provider = providers[loginType];
      const userData = await signInWithPopup(firebaseAuth, provider);
      const email = userData.user.email
        ? userData.user.email
        : userData.user.providerData[0].email;
      const { data } = await axios.post(firebaseLoginRoute, { email });

      if (data.status) {
        localStorage.setItem(
          import.meta.env.VITE_LOCAL,
          JSON.stringify(data.user)
        );
        navigate("/");
      } else {
        navigate("/setusername");
      }
    } catch (err) {}
  };
  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          firebaseLogin("google");
        }}
      >
        <BsGoogle />
      </button>
      <button
        type="button"
        onClick={() => {
          firebaseLogin("github");
        }}
      >
        <BsGithub />
      </button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  button {
    background-color: transparent;
    border: 0.1rem solid #281e31;
    padding: 1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #0d0d2e;
    }
  }
`;
export default SocialLoginButtons;
