import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const SetAvatar = lazy(() => import("./pages/SetAvatar"));
const SetUserName = lazy(() => import("./pages/SetUserName"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setavatar" element={<SetAvatar />} />
          <Route path="/setusername" element={<SetUserName />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
