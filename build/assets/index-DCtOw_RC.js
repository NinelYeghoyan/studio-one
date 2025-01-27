import{d as i,u as a,j as t,n as s}from"./index-BHwElSzH.js";const h=i.div`
  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${e=>e.theme.palette.shadow},
    0 0 15px ${e=>e.theme.palette.shadowSm};
`,r=i.h3`
  font-size: ${e=>e.theme.typography.fontSize.h6.text};
  line-height: ${e=>e.theme.typography.fontSize.h6.leading};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
  text-align: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${e=>e.theme.typography.fontSize.h5.text};
    line-height: ${e=>e.theme.typography.fontSize.h5.leading};
  }
`,d=i.p`
  text-align: center;
  color: ${e=>e.theme.palette.secondary};
`,l=({title:e,description:n})=>{const{t:o}=a();return t.jsxs(h,{className:"px-24 py-24 lg:px-32 lg:py-32",children:[t.jsx(r,{className:"mb-12 lg:mb-16",children:o(s(e))}),t.jsx(d,{children:o(s(n))})]})},p=[{id:1,title:"features.newsFeed.title",description:"features.newsFeed.description"},{id:2,title:"features.userAuthentication.title",description:"features.userAuthentication.description"},{id:3,title:"features.modernDesign.title",description:"features.modernDesign.description"}],m=i.div`
  max-width: 1200px;
`,c=i.h1`
  font-size: ${e=>e.theme.typography.fontSize.h4.text};
  line-height: ${e=>e.theme.typography.fontSize.h4.leading};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${e=>e.theme.typography.fontSize.h3.text};
    line-height: ${e=>e.theme.typography.fontSize.h3.leading};
  }
`,g=i.p`
  text-align: center;
  color: ${e=>e.theme.palette.secondary};

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${e=>e.theme.typography.fontSize.h6.text};
    line-height: ${e=>e.theme.typography.fontSize.h6.leading};
  }
`,x=()=>{const{t:e}=a();return t.jsxs(m,{className:"mx-auto lg:mt-36",children:[t.jsx(c,{className:"mb-16 lg:mb-20",children:e("home.subtitle")}),t.jsx(g,{className:"sm:whitespace-pre-line",children:e("home.description")}),t.jsx("div",{className:"grid grid-cols-auto gap-16 md:gap-24 xl:gap-32 mt-24 lg:mt-36",children:p.map(n=>t.jsx(l,{title:n.title,description:n.description},n.id))})]})};export{x as default};
