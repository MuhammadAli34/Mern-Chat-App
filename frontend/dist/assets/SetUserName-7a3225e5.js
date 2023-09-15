import{u as j,r as o,j as r,L as S}from"./index-011d6651.js";import{l as k}from"./logo-e764a516.js";import{s as y,a as u,r as w,e as C}from"./clsx.m-67077125.js";import{k as N,Q as m}from"./react-toastify.esm-71955589.js";import{o as U,f as A}from"./firebaseConfig-fbe72899.js";const E=(s,a)=>{let n;return(...l)=>{clearTimeout(n),n=setTimeout(()=>{s.apply(void 0,l)},a)}};function H(){const s=j(),[a,n]=o.useState(""),[l,f]=o.useState(""),[c,g]=o.useState(void 0),[i,p]=o.useState(void 0);U(A,e=>{e?g(e.email?e.email:e.providerData[0].email):s("/")});const d={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"};o.useEffect(()=>{localStorage.getItem("chat-app-user")&&s("/")},[]);const h=()=>a.length<3?(m.error("username should be greater than 3 characters.",d),!1):!0,b=async e=>{if(e.preventDefault(),h()){const{data:t}=await u.post(w,{username:a,email:c,password:(Math.random()+1).toString(20).substring(1)});t.status===!1&&m.error(t.message,d),t.status===!0&&(localStorage.setItem("chat-app-user",JSON.stringify(t.user)),s("/"))}},x=E(e=>v(e),300),v=async e=>{if(e.length>3){const{data:t}=await u.post(C,{username:e});p(t.status),f(t.msg),n(e)}};return r.jsxs(r.Fragment,{children:[r.jsx(F,{children:c&&r.jsxs("form",{onSubmit:e=>{b(e)},children:[r.jsxs("div",{className:"brand",children:[r.jsx("img",{src:k,alt:"logo"}),r.jsx("h1",{children:"MA Chat"})]}),r.jsx("span",{children:"Check Username Availablity"}),r.jsxs("div",{className:"row",children:[r.jsx("input",{type:"text",placeholder:"Username",name:"username",onChange:e=>x(e.target.value),min:"3",className:`${i?"success":i!==void 0?"danger":""}`}),r.jsx("label",{htmlFor:"",className:`${i?"success":i!==void 0?"danger":""}`,children:l})]}),r.jsx("button",{type:"submit",className:"btn",children:"CreateUser"}),r.jsxs("span",{children:["You Have An account? ",r.jsx(S,{to:"/login",children:"Login"})]})]})}),r.jsx(N,{})]})}const F=y.div`
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
`;export{H as default};
