import{f as o}from"./index-000460d8.js";import{M as s}from"./Header-2965be1b.js";import"./Button-c6219883.js";import"./vue.esm-bundler-898bf559.js";const f={title:"Example/Header",component:s,tags:["autodocs"],render:p=>({components:{MyHeader:s},setup(){return{...p}},template:'<my-header :user="user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:o(),onLogout:o(),onCreateAccount:o()}},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var u,m,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const L=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,L as __namedExportsOrder,f as default};
