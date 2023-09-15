import{u as h,r as m,j as r,L as x}from"./index-011d6651.js";import{l as b}from"./logo-e764a516.js";import{s as w,a as j,r as y}from"./clsx.m-67077125.js";import{k as v,Q as a}from"./react-toastify.esm-71955589.js";import{S as C}from"./SocialLoginButtons-43b5d56b.js";import"./index.esm-fe1dd79c.js";import"./firebaseConfig-fbe72899.js";function R(){const c=h(),[n,u]=m.useState({username:"",email:"",password:"",confirmPassword:""}),o={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"};m.useEffect(()=>{localStorage.getItem("chat-app-user")&&c("/")},[]);const p=async e=>{if(e.preventDefault(),g()){const{username:i,email:l,password:d,confirmPassword:f}=n,{data:s}=await j.post(y,{username:i,email:l,password:d,confirmPassword:f});s.status===!1&&a.error(s.message,o),s.status===!0&&(localStorage.setItem("chat-app-user",JSON.stringify(s.user)),c("/"))}},g=()=>{const{username:e,email:i,password:l,confirmPassword:d}=n;return e.length<3?(a.error("Your Username Must Be More Than 3 Charcters",o),!1):l!==d?(a.error("Your Password and ConfirmPassword not Match ",o),!1):i==""?(a.error("Email Empty ",o),!1):!0},t=e=>{u({...n,[e.target.name]:e.target.value})};return r.jsxs(r.Fragment,{children:[r.jsx(k,{children:r.jsxs("form",{onSubmit:e=>{p(e)},children:[r.jsxs("div",{className:"brand",children:[r.jsx("img",{src:b,alt:"logo"}),r.jsx("h1",{children:"MA Chat"})]}),r.jsx("input",{type:"text",placeholder:"Username",name:"username",onChange:e=>t(e)}),r.jsx("input",{type:"email",placeholder:"Email",name:"email",onChange:e=>t(e)}),r.jsx("input",{type:"password",placeholder:"password",name:"password",onChange:e=>t(e)}),r.jsx("input",{type:"password",placeholder:"ConfirmPassword",name:"confirmPassword",onChange:e=>t(e)}),r.jsx("button",{type:"submit",className:"btn",children:"Register"}),r.jsx(C,{}),r.jsxs("span",{children:["Already have an account? ",r.jsx(x,{to:"/login",children:"Login"})]})]})}),r.jsx(v,{})]})}const k=w.div`
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
`;export{R as default};
