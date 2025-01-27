import{d as o,u as d,a as c,b as g,c as u,r as x,e as f,f as y,j as t,l as w}from"./index-BHwElSzH.js";import{B as b}from"./index-BfP1EUuz.js";import{I as h}from"./index-CtTm9yZr.js";const $=o.div`
  max-width: 400px;

  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${e=>e.theme.palette.shadow},
    0 0 15px ${e=>e.theme.palette.shadowSm};
`,j=o.h2`
  font-size: ${e=>e.theme.typography.fontSize.h4.text};
  line-height: ${e=>e.theme.typography.fontSize.h4.leading};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${e=>e.theme.typography.fontSize.h3.text};
    line-height: ${e=>e.theme.typography.fontSize.h3.leading};
  }
`,S=o.div`
  font-size: ${e=>e.theme.typography.fontSize.p12.text};
  line-height: ${e=>e.theme.typography.fontSize.p12.leading};
  text-align: center;
  color: ${e=>e.theme.palette.destructive};
`,E=()=>{const{t:e}=d(),r=c(),s=g(),{loading:i,error:n,isAuthenticated:l}=u(a=>a.auth);x.useEffect(()=>(l&&r(f.profile.path),()=>{s(y())}),[l,r,s]);const m=async a=>{a.preventDefault();const p=new FormData(a.currentTarget);await s(w({username:p.get("username"),password:p.get("password")}))};return t.jsxs($,{className:"py-16 px-16 lg:px-32 lg:py-32 mt-80 mx-auto",children:[t.jsx(j,{className:"mb-16 lg:mb-20",children:e("login.title")}),t.jsxs("form",{onSubmit:m,children:[t.jsxs("div",{className:"flex flex-column gap-16",children:[t.jsx(h,{type:"text",name:"username",placeholder:e("login.username"),required:!0,autoComplete:"username"}),t.jsx(h,{type:"password",name:"password",placeholder:e("login.password"),required:!0,autoComplete:"password"})]}),n&&t.jsx(S,{className:"mt-16",children:n}),t.jsx("div",{className:"flex justify-center mt-20",children:t.jsx(b,{type:"submit",disabled:i,className:"px-24",children:e(i?"login.logging":"login.title")})})]})]})};export{E as default};
