import{u as g,r as l,j as e,L as f}from"./index-011d6651.js";import{l as h}from"./logo-e764a516.js";import{s as x,a as b,l as j}from"./clsx.m-67077125.js";import{k as w,Q as a}from"./react-toastify.esm-71955589.js";import{S as v}from"./SocialLoginButtons-43b5d56b.js";import"./index.esm-fe1dd79c.js";import"./firebaseConfig-fbe72899.js";function E(){const i=g(),[o,c]=l.useState({username:"",password:""}),s={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"};l.useEffect(()=>{localStorage.getItem("chat-app-user")&&i("/")},[]);const u=async r=>{if(r.preventDefault(),m()){const{username:n,password:p}=o,{data:t}=await b.post(j,{username:n,password:p});t.status===!1&&a.error(t.message,s),t.status===!0&&(localStorage.setItem("chat-app-user",JSON.stringify(t.user)),i("/"))}},m=()=>{const{username:r,password:n}=o;return r.length===""?(a.error("Username is Required",s),!1):n===""?(a.error("Password is Required ",s),!1):!0},d=r=>{c({...o,[r.target.name]:r.target.value})};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsxs("form",{onSubmit:r=>{u(r)},children:[e.jsxs("div",{className:"brand",children:[e.jsx("img",{src:h,alt:"logo"}),e.jsx("h1",{children:"MA Chat"})]}),e.jsx("input",{type:"text",placeholder:"Username",name:"username",onChange:r=>d(r),min:"3"}),e.jsx("input",{type:"password",placeholder:"password",name:"password",onChange:r=>d(r)}),e.jsx("button",{type:"submit",className:"btn",children:"Login"}),e.jsx(v,{}),e.jsxs("span",{children:["You Don'y Have An account? ",e.jsx(f,{to:"/register",children:"Register"})]})]})}),e.jsx(w,{})]})}const y=x.div`
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
`;export{E as default};
