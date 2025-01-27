import{r as l,j as t,d as s,u as $,m as I,b as T,c as D,g as y,h as F,i as M,k as A,s as B}from"./index-BHwElSzH.js";import{B as w}from"./index-BfP1EUuz.js";import{I as b}from"./index-CtTm9yZr.js";const E=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:t.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 5v14m-7-7h14"})}),P=l.memo(E),W=s.button`
  border: none;

  width: 60px;
  height: 60px;
  border-radius: ${e=>e.theme.borderRadius.roundedFull};

  bottom: 20px;
  right: 20px;

  box-shadow: 0 2px 5px ${e=>e.theme.palette.transparent02};
  background-color: ${e=>e.theme.palette.primary};
  color: ${e=>e.theme.palette.primaryForeground};
  transition: all 0.3s ease 0.05s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-5px);
  }
`,q=({onClick:e})=>t.jsx(W,{className:"flex-center fixed cursor-pointer",onClick:e,children:t.jsx(P,{})}),L=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${e=>e.theme.palette.transparent05};
  z-index: ${e=>e.theme.zIndex.z30};
`,V=s.div`
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;

  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.white};
`,O=s.h2`
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};
  text-align: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    font-size: ${e=>e.theme.typography.fontSize.h6.text};
    line-height: ${e=>e.theme.typography.fontSize.h6.leading};
  }
`,Y=({isOpen:e,onClose:r,children:n,title:i})=>(l.useEffect(()=>(e&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"}),[e]),e?t.jsx(L,{onClick:r,className:"flex-center cursor-pointer",children:t.jsxs(V,{onClick:d=>d.stopPropagation(),className:"px-16 py-16 lg:px-20 lg:py-20 cursor-default",children:[t.jsx(O,{className:"mb-16 lg:mb-20",children:i}),n]})}):null),_=s.div`
  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${e=>e.theme.palette.shadow},
    0 0 15px ${e=>e.theme.palette.shadowSm};

  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);

    .action-btn {
      opacity: 1;
    }
  }

  .action-btn {
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 0.2s;
  }
`,U=s.img`
  height: 200px;
  object-fit: cover;
`,G=s.h3`
  font-size: ${e=>e.theme.typography.fontSize.h6.text};
  line-height: ${e=>e.theme.typography.fontSize.h6.leading};
  font-weight: ${e=>e.theme.typography.fontWeight.medium};
`,H=s.p`
  color: ${e=>e.theme.palette.secondary};
`,J=s.span`
  font-size: ${e=>e.theme.typography.fontSize.p12.text};
  line-height: ${e=>e.theme.typography.fontSize.p12.leading};
  font-weight: ${e=>e.theme.typography.fontWeight.semibold};

  border-radius: ${e=>e.theme.borderRadius.rounded4};
  background-color: ${({$isPrime:e})=>e?r=>r.theme.palette.yellow:r=>r.theme.palette.blue};
  color: ${e=>e.theme.palette.white};
`,K=s.div`
  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.white};
  box-shadow:
    0 23px 20px -20px ${e=>e.theme.palette.shadow},
    0 0 15px ${e=>e.theme.palette.shadowSm};
`,Q=s.div`
  height: 200px;
`,X=s.div`
  height: 28px;
  width: 24px;
`,Z=s.div`
  height: 28px;
  width: 200px;
`,ee=s.div`
  height: 10px;
  width: 100%;

  ~ div {
    margin-top: 4px;
  }
`,te=l.forwardRef(({id:e,title:r,description:n,image:i,fibNumber:d,prime:u,onDelete:f,onEdit:m},o)=>{const{t:h}=$();return t.jsxs(_,{ref:o,children:[t.jsxs("div",{className:"relative",children:[t.jsx(U,{src:i,alt:r,loading:"lazy",className:"w-full"}),t.jsxs("div",{className:"action-btn flex gap-4 absolute",children:[t.jsx(w,{onClick:()=>m({id:e,title:r,description:n,image:i}),variant:"primary",size:"extra-small",className:"px-16",children:h("news.edit")}),t.jsx(w,{onClick:f,variant:"destructive",size:"extra-small",className:"px-16",children:h("news.delete")})]})]}),t.jsxs("div",{className:"px-16 py-16",children:[t.jsxs("div",{className:"flex-between mb-8",children:[t.jsx(G,{children:r}),t.jsx(J,{$isPrime:u,className:"px-8 py-4",children:d})]}),t.jsx(H,{children:n})]})]})}),re=I`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,ae=s.div`
  width: 100%;
  height: 100%;
  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.gray03};
  background-image: linear-gradient(
    90deg,
    ${e=>e.theme.palette.gray03} 0%,
    ${e=>e.theme.palette.gray04} 20%,
    ${e=>e.theme.palette.gray05} 40%,
    ${e=>e.theme.palette.gray04} 60%,
    ${e=>e.theme.palette.gray03} 80%
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;
  animation: ${re} 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  opacity: 0.7;
`,g=()=>t.jsx(ae,{}),se=()=>t.jsx("div",{className:"grid grid-cols-auto gap-16 md:gap-24 xl:gap-32 mt-24 lg:mt-36",children:[...Array(3)].map((e,r)=>t.jsxs(K,{children:[t.jsx(Q,{children:t.jsx(g,{})}),t.jsxs("div",{className:"px-16 py-16",children:[t.jsxs("div",{className:"flex-between mb-8",children:[t.jsx(Z,{children:t.jsx(g,{})}),t.jsx(X,{children:t.jsx(g,{})})]}),[...Array(6)].map((n,i)=>t.jsx(ee,{children:t.jsx(g,{})},i))]})]},r))}),oe=s.div`
  max-width: 1200px;

  .search-input {
    width: 300px;
  }
`,ne=s.textarea`
  min-height: 100px;
  font-family: ${e=>e.theme.typography.fontFamily.montserrat}, sans-serif;
  font-size: ${e=>e.theme.typography.fontSize.p16.text};
  line-height: ${e=>e.theme.typography.fontSize.p16.leading};

  border-radius: ${e=>e.theme.borderRadius.rounded8};
  background-color: ${e=>e.theme.palette.white};
  border: 2px solid ${e=>e.theme.palette.gray03};
  color: ${e=>e.theme.palette.foreground};

  &::placeholder {
    font-family: ${e=>e.theme.typography.fontFamily.montserrat}, sans-serif;
    font-size: ${e=>e.theme.typography.fontSize.p16.text};
    line-height: ${e=>e.theme.typography.fontSize.p16.leading};
  }

  &:focus {
    outline-color: ${e=>e.theme.palette.gray05};
  }
`,ie=e=>{if(e<=1)return e;let r=0,n=1;for(let i=2;i<=e;i++){const d=r+n;r=n,n=d}return n},le=e=>{if(e<=1)return!1;if(e<=3)return!0;if(e%2===0||e%3===0)return!1;for(let r=5;r*r<=e;r+=6)if(e%r===0||e%(r+2)===0)return!1;return!0},pe=()=>{const{t:e}=$(),r=T(),{items:n,loading:i,hasMore:d,searchTerm:u}=D(a=>a.news),[f,m]=l.useState(!1),[o,h]=l.useState(null),[v,j]=l.useState(1),x=l.useRef(null);l.useEffect(()=>{r(y())},[r,v,u]);const S=l.useCallback(a=>{x.current&&x.current.disconnect(),x.current=new IntersectionObserver(c=>{c[0].isIntersecting&&d&&j(p=>p+1)}),a&&x.current.observe(a)},[d]),N=async a=>{await r(F(a)).unwrap(),r(y())},k=a=>{h(a),m(!0)},z=async a=>{a.preventDefault();const c=new FormData(a.currentTarget),p={title:c.get("title"),description:c.get("description"),image:c.get("image")};o?await r(M({id:o.id,updates:p})).unwrap():await r(A(p)).unwrap(),r(y()),m(!1),h(null)},C=a=>{r(B(a.target.value)),j(1)};return t.jsxs(oe,{className:"mx-auto lg:mt-36",children:[t.jsx("div",{className:"flex justify-center",children:t.jsx(b,{name:"title",placeholder:e("news.search"),value:u,onChange:C,className:"search-input"})}),i?t.jsx(se,{}):t.jsx("div",{className:"grid grid-cols-auto gap-16 md:gap-24 xl:gap-32 mt-24 lg:mt-36",children:n.map((a,c)=>{const p=ie(c+1),R=le(p);return t.jsx(te,{id:a.id,title:a.title,description:a.description,image:a.image,fibNumber:p,prime:R,ref:c===n.length-1?S:null,onDelete:()=>N(a.id),onEdit:k},a.id)})}),t.jsx(q,{onClick:()=>{h(null),m(!0)}}),t.jsx(Y,{isOpen:f,onClose:()=>{m(!1),h(null)},title:e(o?"modal.editTitle":"modal.addTitle"),children:t.jsxs("form",{onSubmit:z,className:"flex flex-column gap-12",children:[t.jsx(b,{name:"title",placeholder:e("modal.inputTitle"),defaultValue:o==null?void 0:o.title,required:!0}),t.jsx(ne,{name:"description",placeholder:e("modal.inputDescription"),defaultValue:o==null?void 0:o.description,required:!0,className:"px-8 py-8"}),t.jsx(b,{name:"image",placeholder:e("modal.inputImageURL"),defaultValue:o==null?void 0:o.image,required:!0}),t.jsx("div",{className:"flex justify-center",children:t.jsx(w,{type:"submit",className:"px-24",children:e(o?"modal.saveButton":"modal.addButton")})})]})})]})};export{pe as default};
