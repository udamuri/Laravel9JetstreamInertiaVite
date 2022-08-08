import{u as b,o as n,e as d,b as s,g as t,w as m,F as w,H as g,t as h,f as c,a as o,c as x,L as k,n as y,m as V,i as _}from"./app.f23fd69f.js";import{J as v}from"./AuthenticationCard.98e5b234.js";import{_ as $}from"./AuthenticationCardLogo.b3972472.js";import{_ as B}from"./Button.a724eedf.js";import{_ as u}from"./Input.682fc788.js";import{_ as F}from"./Checkbox.57955ce7.js";import{_ as f}from"./Label.aa8b4389.js";import{_ as L}from"./ValidationErrors.699894c0.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},U={class:"block mt-4"},q={class:"flex items-center"},P=o("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),R={class:"flex items-center justify-end mt-4"},H=_(" Forgot your password? "),J=_(" Log in "),K={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),p=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,a)=>(n(),d(w,null,[s(t(g),{title:"Log in"}),s(v,null,{logo:m(()=>[s($)]),default:m(()=>[s(L,{class:"mb-4"}),l.status?(n(),d("div",C,h(l.status),1)):c("",!0),o("form",{onSubmit:V(p,["prevent"])},[o("div",null,[s(f,{for:"email",value:"Username"}),s(u,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":a[0]||(a[0]=r=>t(e).email=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),o("div",S,[s(f,{for:"password",value:"Password"}),s(u,{id:"password",modelValue:t(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>t(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),o("div",U,[o("label",q,[s(F,{checked:t(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>t(e).remember=r),name:"remember"},null,8,["checked"]),P])]),o("div",R,[l.canResetPassword?(n(),x(t(k),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[H]),_:1},8,["href"])):c("",!0),s(B,{class:y(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[J]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{K as default};
