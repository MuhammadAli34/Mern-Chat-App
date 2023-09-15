import{u as c,j as t}from"./index-011d6651.js";import{s as l,a as d,f as p}from"./clsx.m-67077125.js";import{a as g,b as m}from"./index.esm-fe1dd79c.js";import{G as b,a as f,s as h,f as x}from"./firebaseConfig-fbe72899.js";function G(){const o=c(),i={google:new b,github:new f},r=async n=>{try{const s=i[n],e=await h(x,s),u=e.user.email?e.user.email:e.user.providerData[0].email,{data:a}=await d.post(p,{email:u});a.status?(localStorage.setItem("chat-app-user",JSON.stringify(a.user)),o("/")):o("/setusername")}catch{}};return t.jsxs(j,{children:[t.jsx("button",{type:"button",onClick:()=>{r("google")},children:t.jsx(g,{})}),t.jsx("button",{type:"button",onClick:()=>{r("github")},children:t.jsx(m,{})})]})}const j=l.div`
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
`;export{G as S};
