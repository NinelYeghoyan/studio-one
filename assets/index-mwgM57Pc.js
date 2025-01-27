import{d as o,u as r,b as p,a as d,j as t,o as h,e as c}from"./index-BHwElSzH.js";import{B as m}from"./index-BfP1EUuz.js";const g=o.div`
  max-width: 800px;
  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${e=>e.theme.palette.shadow},
    0 0 15px ${e=>e.theme.palette.shadowSm};
`,x=o.div`
  border-bottom: 1px solid ${({theme:e})=>e.palette.gray03};
`,f=o.h2`
  font-size: ${e=>e.theme.typography.fontSize.h4.text};
  line-height: ${e=>e.theme.typography.fontSize.h4.leading};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${e=>e.theme.typography.fontSize.h3.text};
    line-height: ${e=>e.theme.typography.fontSize.h3.leading};
  }
`,y=o.p`
  color: ${({theme:e})=>e.palette.secondary};
`,i=o.div`
  border-radius: ${e=>e.theme.borderRadius.rounded4};
  background-color: ${({theme:e})=>e.palette.gray02};
  color: ${({theme:e})=>e.palette.secondary};
`,a=o.h3`
  font-size: ${e=>e.theme.typography.fontSize.h6.text};
  line-height: ${e=>e.theme.typography.fontSize.h6.leading};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  color: ${({theme:e})=>e.palette.foreground};
`,$=()=>{const{t:e}=r(),l=p(),s=d(),n=async()=>{await l(h()),s(c.login.path)};return t.jsxs(g,{className:"py-16 px-16 lg:px-32 lg:py-32 mx-auto lg:mt-36",children:[t.jsxs(x,{className:"flex-between pb-20 mb-24 lg:mb-32",children:[t.jsx(f,{children:e("profile.title")}),t.jsx(m,{type:"button",variant:"destructive",className:"px-24",onClick:n,children:e("login.logout")})]}),t.jsxs("div",{className:"flex flex-column gap-20",children:[t.jsx(y,{children:e("profile.description")}),t.jsxs(i,{className:"px-16 py-20 lg:px-20",children:[t.jsx(a,{className:"mb-16",children:e("profile.accountInformation.title")}),t.jsx("p",{children:e("profile.accountInformation.description")})]}),t.jsxs(i,{className:"px-16 py-20 lg:px-20",children:[t.jsx(a,{className:"mb-16",children:e("profile.about.title")}),t.jsx("p",{children:e("profile.about.description")})]})]})]})};export{$ as default};
